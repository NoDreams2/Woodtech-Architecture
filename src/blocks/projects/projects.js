const loadMoreButton = document.getElementById("load-more");
const hideButton = document.getElementById("hide-cards");
const projectsCardsContainer = document.getElementById("projects-cards");
let allCards = [];
let displayedCards = 3;

const cardTemplate = `
    <article class="col-md-4 card-best-work">
        <div class="card-best-work__image-container">
            <div class="card-best-work__image-wrapper">
                <img class="img-responsive card-best-work__img" src="%IMAGE%" alt="%ALT%">
            </div>
        </div>
        <a href="#!" class="card-best-work__location-link">
            <img class="card-best-work__location-icon" src="../images/card-best-work/icon/mapmarker.svg" alt="Иконка обозначающая локацию">
            <span class="card-best-work__location-text">%LOCATION%</span>
        </a>
        <a href="#!" class="card-best-work__desc-link">
            <svg class="card-best-work__desc-icon" width="20" height="35" viewBox="0 0 5 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="currentColor"/>
                <circle cx="2.5" cy="17.5" r="2.5" fill="currentColor"/>
                <circle cx="2.5" cy="32.5" r="2.5" fill="currentColor"/>
            </svg>
            <p class="card-best-work__desc-text">%DESC%</p>
        </a>
    </article>
`;

async function loadCards() {
  try {
    const response = await fetch("./projects.json");
    const data = await response.json();
    allCards = data;
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function addCards(count) {
  const fragment = document.createDocumentFragment();
  const cardsToDisplay = allCards.slice(0, count);
  cardsToDisplay.forEach((card) => {
    const cardHTML = cardTemplate
      .replace("%IMAGE%", card.image)
      .replace("%ALT%", card.alt)
      .replace("%LOCATION%", card.location)
      .replace("%DESC%", card.desc);
    fragment.appendChild(
      new DOMParser().parseFromString(cardHTML, "text/html").body.firstChild
    );
  });
  projectsCardsContainer.innerHTML = "";
  projectsCardsContainer.appendChild(fragment);
}

loadCards().then(() => {
  addCards(displayedCards);
});

loadMoreButton.addEventListener("click", () => {
  const remainingCards = allCards.length - displayedCards;
  if (remainingCards > 0) {
    displayedCards = Math.min(displayedCards + 3, allCards.length);
    addCards(displayedCards);
  }
  loadMoreButton.style.display =
    displayedCards < allCards.length ? "block" : "none";
  hideButton.style.display =
    displayedCards >= allCards.length ? "block" : "none";
});

hideButton.addEventListener("click", () => {
  displayedCards = 3;
  addCards(displayedCards);
  loadMoreButton.style.display = "block";
  hideButton.style.display = "none";
});

hideButton.style.display = "none";
