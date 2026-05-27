// search + filter state

let searchValue = "";
let mythologyFilter = "all";
let favoritesOnly = false;

let favoriteGods = new Set(JSON.parse(localStorage.getItem("favorites")) || []);

// extract necessary element data from html

// header
const searchBar = document.querySelector(".searchbar");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const favoritesToggle = document.querySelector(".favorites-toggle");

// card container
const godsContainer = document.querySelector(".gods-container");

// modal
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-button");
const modalTitle = modal.querySelector("h1");
const triviaText = modal.querySelector(".god-trivia p");
const loreText = modal.querySelector(".god-lore p");
const domainList = modal.querySelector(".god-domain ul");
const symbolList = modal.querySelector(".god-symbol ul");
const modalImg = document.querySelector(".modal .left-content img");

// toggle favorites
function toggleFavorite(god, button) {
  const godName = god.name.toLowerCase();

  if (favoriteGods.has(godName)) {
    favoriteGods.delete(godName);
    button.textContent = "☆";
  } else {
    favoriteGods.add(godName);
    button.textContent = "★";
  }

  saveFavorites();
  applyFilters();
}

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify([...favoriteGods]));
}

// render cards dynamically

// create card
function createGodCard(god) {
  const card = document.createElement("div");
  const mythologyClass = god.mythology.toLowerCase();
  card.classList.add("gods-card");

  card.dataset.mythology = mythologyClass;
  card.dataset.name = god.name.toLowerCase();

  card.innerHTML = `
      <img src="${god.image}" alt="${god.name}">

      <div class="gods-identity">
        <h2 class="gods-name">${god.name}</h2>

        <span class="mythology-tag ${mythologyClass}">
          ${god.mythology} Mythology
        </span>
      </div>

      <div class="card-footer">
        <p>${god.description}</p>

        <button class="favorite-button">
          ${favoriteGods.has(god.name.toLowerCase()) ? "★" : "☆"}
        </button>
      </div>
    `;

  // select button from current card
  const favoriteBtn = card.querySelector(".favorite-button");
  favoriteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(god, favoriteBtn);
  });

  // OPEN MODAL
  card.addEventListener("click", () => {
    openModal(god);
  });
  return card;
}

function renderGods() {
  godsContainer.innerHTML = "";

  gods.forEach((god) => {
    godsContainer.appendChild(createGodCard(god));
  });
}

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

renderGods();

// filter using search

searchBar.addEventListener("input", (e) => {
  searchValue = e.target.value.toLowerCase();
  applyFilters();
});

// filter using button

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mythologyFilter = button.textContent.trim().toLowerCase();
    applyFilters();

    // remove active from all buttons
    filterButtons.forEach((button) => button.classList.remove("active"));

    // activate clicked button
    button.classList.add("active");
  });
});

// filter both search + buttons

function applyFilters() {
  const cards = document.querySelectorAll(".gods-card");

  cards.forEach((card) => {
    const name = card.dataset.name;
    const mythology = card.dataset.mythology;

    const matchesSearch = name.includes(searchValue);

    const matchesMythology =
      mythologyFilter === "all" || mythology === mythologyFilter;

    const matchesFavorites = !favoritesOnly || favoriteGods.has(name);

    card.style.display =
      matchesSearch && matchesMythology && matchesFavorites ? "" : "none";
  });
}

// open modal

function openModal(god) {
  modalTitle.textContent = god.name;

  modalImg.src = god.image;

  domainList.innerHTML = god.domain.map((d) => `<li>${d}</li>`).join("");

  symbolList.innerHTML = god.symbols.map((s) => `<li>${s}</li>`).join("");

  triviaText.textContent = god.trivia;

  loreText.textContent = god.lore;

  modalOverlay.classList.add("active");

  modal.scrollTop = 0;

  // optional: prevent background scroll
  document.body.style.overflow = "hidden";
}

// close modal
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// filter by favorite
favoritesToggle.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;

  favoritesToggle.classList.toggle("active");

  applyFilters();
});
