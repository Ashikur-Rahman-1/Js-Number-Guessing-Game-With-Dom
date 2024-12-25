//targeting First box elements
const playerOneBox = document.querySelector(".playerOneBox");
const firstBox = document.querySelector(".firstBox");
const fistBoxHeading = document.querySelector(".fistBoxHeading");
const playerOne = document.querySelector(".playerOne");
const allError = document.querySelector(".allError");
const inputFieldOne = document.querySelector(".inputFieldOne");
const Startbtn = document.querySelector(".Startbtn");

//targeting Second box elements
const playerTwoBox = document.querySelector(".playerTwoBox");
const secondBox = document.querySelector(".secondBox");
const secondBoxHeading = document.querySelector(".secondBoxHeading");
const playerTwo = document.querySelector(".playerTwo");
const allErrorTwo = document.querySelector(".allErrorTwo");
const warning = document.querySelector(".warning");
const inputFieldTwo = document.querySelector(".inputFieldTwo");
const Guessbtn = document.querySelector(".Guessbtn");
const playAgain = document.querySelector(".playAgain");

//taking player one number

let playerOneNumber = inputFieldOne.value;
let chance = 5;

// Start button functionality

Startbtn.addEventListener("click", () => {
  if (isNaN(inputFieldOne.value)) {
    allError.innerHTML = "Please Insert A Number";
    return;
  } else if (inputFieldOne.value.length > 4) {
    allError.innerHTML = "Input 4 digits";
    return;
  }

  playerOneNumber = inputFieldOne.value;

  /**
   * firstBox disappear
   * secondBox appear
   */

  playerOneBox.style.display = "none";
  playerTwoBox.style.display = "block";
});

// adding keydown addEventListener

inputFieldOne.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    allError.innerHTML = "";
    return;
  }
});

//guess button functionality

Guessbtn.addEventListener("click", function () {
  if (isNaN(inputFieldTwo.value)) {
    allErrorTwo.innerHTML = "Please Insert A Number";
    return;
  } else if (inputFieldTwo.value.length > 4) {
    allErrorTwo.innerHTML = "Input 4 digits";
    return;
  }

  let playerTwoNumber = inputFieldTwo.value;

  if (playerOneNumber == playerTwoNumber) {
    playerTwo.innerHTML = "Congratulations! You Win!";
    secondBoxHeading.style.display = "none";
    inputFieldTwo.style.display = "none";
    Guessbtn.style.display = "none";
    playAgain.style.display = "block";
  } else {
    chance--;
    if (chance == 0) {
      warning.innerHTML = "GAME OVER!";
      Guessbtn.style.display = "none";
      inputFieldTwo.setAttribute("disabled", "");
    } else {
      warning.innerHTML = `You have ${chance} chance, so be careful!`;
    }
  }
});

// adding keydown addEventListener

inputFieldTwo.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    allErrorTwo.innerHTML = "";
    return;
  }
});

//play again button functionality

playAgain.addEventListener("click", () => {
  const sure = confirm("Are you sure you want to play again?");
  if (sure) {
    location.reload();
  }
});
