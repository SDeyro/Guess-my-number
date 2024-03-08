'use strict';

const checkBtn = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const bodyEl = document.querySelector('body');
const againBtn = document.querySelector('.again');
const highscoreEl = document.querySelector('.highscore');

// GET THE RANDOM NUMBER BETWEEN 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageEl.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there's no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;

      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You loss the game!');
      scoreEl.textContent = 0;
    }
  }
});

// Reset the game
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing ...');

  numberEl.textContent = '?';
  scoreEl.textContent = score;
  guessEl.value = '';
  highscoreEl.textContent = highscore;
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
