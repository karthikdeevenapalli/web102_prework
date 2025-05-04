/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
 *****************************************************************************/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// ——— Grab all necessary DOM references ———
// Summary cards
const contributionsCard    = document.getElementById("contributions-card");
const raisedCard           = document.getElementById("raised-card");
const gamesCard            = document.getElementById("games-card");
// Filter buttons
const unfundedBtn          = document.getElementById("unfunded-btn");
const fundedBtn            = document.getElementById("funded-btn");
const allBtn               = document.getElementById("all-btn");
// Containers
const descriptionContainer = document.getElementById("description-container");
const gamesContainer       = document.getElementById("games-container");
const firstGameContainer   = document.getElementById("first-game");
const secondGameContainer  = document.getElementById("second-game");

/**
 * remove all child elements from a parent element in the DOM
 */
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

 /*****************************************************************************
  * Challenge 3: Add data about each game as a card to the games-container
  * Skills used: DOM manipulation, for loops, template literals, functions
  *****************************************************************************/

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    // clear out any existing game cards
    deleteChildElements(gamesContainer);

    for (const game of games) {
        // 1. Create card container
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // 2. Populate with image, name, description, pledged & backers
        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" alt="${game.name}" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p>Pledged: $${game.pledged.toLocaleString()}</p>
            <p>Backers: ${game.backers.toLocaleString()}</p>
        `;

        // 3. Append to container
        gamesContainer.appendChild(gameCard);
    }
}

// 4. On initial load, show all games:
addGamesToPage(GAMES_JSON);

 /*************************************************************************************
  * Challenge 4: Create the summary statistics at the top of the page displaying the
  * total number of contributions, amount donated, and number of games on the site.
  * Skills used: arrow functions, reduce, template literals
  *************************************************************************************/

// Total contributions (sum of backers)
const totalContributions = GAMES_JSON
  .reduce((sum, game) => sum + game.backers, 0);
contributionsCard.innerText = totalContributions.toLocaleString();

// Total amount raised (sum of pledged)
const totalRaised = GAMES_JSON
  .reduce((sum, game) => sum + game.pledged, 0);
raisedCard.innerText = `$${totalRaised.toLocaleString()}`;

// Number of games
gamesCard.innerText = GAMES_JSON.length;

 /*************************************************************************************
  * Challenge 5: Add functions to filter the funded and unfunded games
  * Skills used: functions, filter
  *************************************************************************************/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    const unfunded = GAMES_JSON.filter(g => g.pledged < g.goal);
    addGamesToPage(unfunded);
}

// show only games that have met or exceeded their goal
function filterFundedOnly() {
    deleteChildElements(gamesContainer);
    const funded = GAMES_JSON.filter(g => g.pledged >= g.goal);
    addGamesToPage(funded);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    addGamesToPage(GAMES_JSON);
}

// Hook up buttons to their respective filter functions
unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

 /*************************************************************************************
  * Challenge 6: Add more information at the top of the page about the company.
  * Skills used: template literals, ternary operator
  *************************************************************************************/

// count how many games remain unfunded
const unfundedCount = GAMES_JSON.filter(g => g.pledged < g.goal).length;

// create a summary sentence with correct pluralization
const summaryText = `A total of ${unfundedCount} ` +
  `${unfundedCount === 1 ? 'game remains' : 'games remain'} unfunded. ` +
  `We need your help to fund these amazing projects!`;

// create a new paragraph element, set its text, and append to the description container
const summaryEl = document.createElement("p");
summaryEl.innerText = summaryText;
descriptionContainer.appendChild(summaryEl);

 /*************************************************************************************
  * Challenge 7: Select & display the top 2 games
  * Skills used: spread operator, destructuring, template literals, sort
  *************************************************************************************/

// Copy & sort descending by pledged amount
const sortedGames = [...GAMES_JSON].sort((a, b) => b.pledged - a.pledged);

// use destructuring to grab the top two
const [topGame, runnerUp] = sortedGames;

// Display the name of the top pledged game
const topEl = document.createElement("p");
topEl.innerText = topGame.name;
firstGameContainer.appendChild(topEl);

// Display the name of the runner-up game
const runnerEl = document.createElement("p");
runnerEl.innerText = runnerUp.name;
secondGameContainer.appendChild(runnerEl);



// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item