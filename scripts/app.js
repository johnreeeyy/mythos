//filter cards using searchbar
const searchBar = document.querySelector(".searchbar");
const godsNames = document.getElementsByClassName("gods-card");

searchBar.addEventListener("input", () => {
  const filter = searchBar.value.toLowerCase();

  Array.from(godsNames).forEach((god) => {
    const text = god.querySelector("h2");
    const godName = text.textContent.toLowerCase();

    if (godName.includes(filter)) {
      god.style.display = "";
    } else {
      god.style.display = "none";
    }
  });
});

//render cards dynamically

const godsContainer = document.querySelector(".gods-container");

gods.forEach((god) => {
  const card = document.createElement("div");
  card.classList.add("gods-card");

  card.innerHTML = `
    <img src="${god.image}" alt="${god.name}">

    <div class="gods-identity">
      <h2 class="gods-name">${god.name}</h2>
      <span class="mythology-tag">${god.mythology}</span>
    </div>

    <p>${god.description}</p>

  `;

  godsContainer.appendChild(card);
});
