const greenButton = document.getElementById('greenButton');
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const yellowButton = document.getElementById('yellowButton');
const score = document.getElementById('score');
let pattern = [];

function addStep() {
    pattern.push(Math.floor(Math.random() * 3));
}



addStep();
addStep();
addStep();
addStep();
addStep();

playPattern(0);

function playPattern(i) {
    if (i < pattern.length)
    switch (pattern[i]) {
        case 0:
            greenButton.style.backgroundColor = "rgba(0,190,16,1)";
            setTimeout(() => {
                greenButton.style.backgroundColor = "rgba(0,190,16,.5)";
                playPattern(++i);
            }, 1000)
            break;

        case 1:
            redButton.style.backgroundColor = "rgba(255, 0, 0, 1)";
            setTimeout(() => {
                redButton.style.backgroundColor = "rgba(255, 0, 0, .5)";
                playPattern(++i);
            }, 1000)
            break;

        case 2:
            blueButton.style.backgroundColor = "rgba(0, 0, 255, 1)";
            setTimeout(() => {
                blueButton.style.backgroundColor = "rgba(0, 0, 255, .5)";
                playPattern(++i);
            }, 1000)
            break;

        case 3:
            yellowButton.style.backgroundColor = "rgba(255, 255, 0, 1)";
            setTimeout(() => {
                yellowButton.style.backgroundColor = "rgba(255, 255, 0, .5)";
                playPattern(++i);
            }, 1000)
            break;
    }
}