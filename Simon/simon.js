const greenButton = document.getElementById('greenButton');
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const yellowButton = document.getElementById('yellowButton');
const score = document.getElementById('score');
let pattern = [];

function addStep() {
    pattern.push(Math.floor(Math.random() * 4 + 1));
}

