const colorToGuess = document.getElementById('rgb-color');
const colorList = document.getElementById('color-options');
const answer = document.getElementById('answer');
const colors = document.getElementsByClassName('ball');
const score = document.getElementById('score');

function createColorCircle() {
  for (let i = 0; i < 6; i += 1) {
    const options = document.createElement('li');
    options.className = 'ball';
    colorList.appendChild(options);
  }
}

createColorCircle();

function colorizeCircle() {
  for (let i = 0; i < colors.length; i += 1) {
    const randomRGB = () => Math.floor(Math.random() * 256);
    colors[i].style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
  }
}
colorizeCircle();


function randomizeText() {
  const randomText = () => Math.floor(Math.random() * 6);
  const colorRGBText = colors[randomText()].style.backgroundColor;
  colorToGuess.innerText = colorRGBText.replace('rgb', '');
}
randomizeText();


function checkAnswer() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (event) => {
      const selectedColor = event.target.style.backgroundColor;
      if (selectedColor.replace('rgb', '') === colorToGuess.innerText) {
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
checkAnswer();


const btnReset = document.getElementById('reset-game');

function resetGame() {
  btnReset.addEventListener('click', () => {
    document.location.reload();
  });
}
resetGame();


function initialScore() {
  if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', '0');
  }
  const result = localStorage.getItem('score');
  score.innerText = `Pontos: ${result}`;
}
initialScore();


function pointCounter() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (e) => {
      let points = 0;
      const selectedColor = e.target.style.backgroundColor;

      if (selectedColor.replace('rgb', '') === colorToGuess.innerText) {
        points = parseInt(localStorage.getItem('score'), 10);
        points += 3;
      } else {
        points = parseInt(localStorage.getItem('score'), 10);
      }
      localStorage.setItem('score', points);
      const result = localStorage.getItem('score');
      score.innerText = `Pontos: ${result}`;
    });
  }
}
pointCounter();
