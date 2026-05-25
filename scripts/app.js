// search + filter state

let searchValue = "";
let mythologyFilter = "all";

// extract necessary element data from html

const searchBar = document.querySelector(".searchbar");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const godsContainer = document.querySelector(".gods-container");
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-button");
const domainList = modal.querySelector(".god-domain ul");
const symbolList = modal.querySelector(".god-symbol ul");
const modalImg = document.querySelector(".modal .left-content img");

// render cards dynamically

function renderGods() {
  godsContainer.innerHTML = "";

  gods.forEach((god) => {
    const mythologyClass = god.mythology.toLowerCase();

    const card = document.createElement("div");
    card.classList.add("gods-card");

    card.dataset.mythology = mythologyClass;

    card.innerHTML = `
      <img src="${god.image}" alt="${god.name}">

      <div class="gods-identity">
        <h2 class="gods-name">${god.name}</h2>
        <span class="mythology-tag ${mythologyClass}">
          ${god.mythology} Mythology
        </span>
      </div>

      <p>${god.description}</p>
    `;

    godsContainer.appendChild(card);

    card.addEventListener("click", () => {
      openModal(god);
    });
  });
}

closeBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", () => {
  renderGods();
});

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
    const name = card.querySelector("h2").textContent.toLowerCase();
    const mythology = card.dataset.mythology;

    const matchesSearch = name.includes(searchValue);
    const matchesMythology =
      mythologyFilter === "all" || mythology === mythologyFilter;

    if (matchesSearch && matchesMythology) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// open modal

function openModal(god) {
  modal.querySelector("h1").textContent = god.name;

  modalImg.src = god.image;

  domainList.innerHTML = god.domain.map((d) => `<li>${d}</li>`).join("");

  symbolList.innerHTML = god.symbols.map((s) => `<li>${s}</li>`).join("");

  modal.querySelector(".god-trivia p").textContent = god.trivia;
  modal.querySelector(".god-lore p").textContent = god.lore;

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
