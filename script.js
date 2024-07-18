const colorToGuess = document.getElementById('rgb-color');
const colorList = document.getElementById('color-options');

function createColorCircle () {
    for (let i =0; i < 6; i += 1) {
        const options = document.createElement('li');
        options.className = 'ball';
        colorList.appendChild(options);
    }
}

createColorCircle();
