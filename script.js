const colorToGuess = document.getElementById('rgb-color');
const colorList = document.getElementById('color-options');
const answer = document.getElementById('answer');
const colors = document.getElementsByClassName('ball');

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
