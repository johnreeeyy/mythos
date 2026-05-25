// search + filter state

let searchValue = "";
let mythologyFilter = "all";

// extract necessary element data from html

const searchBar = document.querySelector(".searchbar");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const godsContainer = document.querySelector(".gods-container");

// render cards dynamically

function renderGods() {
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
  });
}

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
