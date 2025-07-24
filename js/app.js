/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

const state = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

let timer;

let gameOver = false;

/*------------------------ Cached Element References ------------------------*/

const boredomStatElement = document.querySelector("#boredom-stat");
const hungerStatElement = document.querySelector("#hunger-stat");
const sleepinessStatElement = document.querySelector("#sleepiness-stat");

const playButtonElement = document.querySelector("#play");
const feedButtonElement = document.querySelector("#feed");
const sleepButtonElement = document.querySelector("#sleep");

const gameMessageElement = document.querySelector("#message");
const resetButtonElement = document.querySelector("#restart");

/*-------------------------------- Functions --------------------------------*/

function init() {
  gameOver = false;
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  resetButtonElement.classList.add("hidden");
  gameMessageElement.classList.add("hidden");
  clearInterval(timer);
  console.log("init started");
  timer = setInterval(runGame, 2000);

  function runGame() {
    updateStates();
    checkGameOver();
    render();
  }
}

function render() {
  boredomStatElement.textContent = state.boredom;
  hungerStatElement.textContent = state.hunger;
  sleepinessStatElement.textContent = state.sleepiness;

  if (gameOver === true) {
    clearInterval(timer);
    resetButtonElement.classList.remove("hidden"); //remove classes hidden from the h2 and button
    gameMessageElement.classList.remove("hidden");
  }
}
// render();

function updateStates() {
  state.boredom += Math.floor(Math.random() * 4);
  state.hunger += Math.floor(Math.random() * 4);
  state.sleepiness += Math.floor(Math.random() * 4);
}

function checkGameOver() {
  if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
    gameOver = true;
  }
}

function playButtonClick() {
  state.boredom = 0;
  state.hunger = 0;
  state.sleepiness = 0;
  render();
}

playButtonElement.addEventListener("click", () => {
  playButtonClick();
});

feedButtonElement.addEventListener("click", () => {
  playButtonClick();
});

sleepButtonElement.addEventListener("click", () => {
  playButtonClick();
});

resetButtonElement.addEventListener("click", () => {
  init();
});

init();

/*----------------------------- Event Listeners -----------------------------*/

// 1) Define the required variables used to track the state of the game.

// 2) Store cached element references.

// 3) Upon loading, the game state should be initialized, and a function should
//    be called to render this game state.

// 4) The state of the game should be rendered to the user.

// 5) Handle the game over logic.

// 6) Handle each instance of a player clicking a button with the use of a
//    `handleClick()` function.

// 7) Create reset functionality.

//adding additional code to see if commit works