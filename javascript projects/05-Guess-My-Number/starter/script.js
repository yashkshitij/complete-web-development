'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'winning number❤️';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secret_no = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('guess something');
    document.querySelector('.score').textContent = score;
  } else if (guess === secret_no) {
    displayMessage('thast correct');

    // winning

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secret_no) {
    if (score > 1) {
      displayMessage(guess > secret_no ? 'too high' : 'too low');

      document.querySelector('.score').textContent = score;
      score--;
    } else {
      displayMessage('you lost');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secret_no = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = '?';
  displayMessage('start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
