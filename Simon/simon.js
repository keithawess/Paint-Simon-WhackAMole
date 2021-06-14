const greenButton = document.getElementById('greenButton');
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const yellowButton = document.getElementById('yellowButton');
const score = document.getElementById('score');
const green = 0;
const red = 1;
const blue = 2;
const yellow = 3;
let pattern = [];
let userInputList = [];
let userTurn = false;

greenButton.addEventListener ("click", (e) => {
    if (userTurn === true)
    {
        greenButton.style.backgroundColor = "rgba(0,190,16,1)";
        setTimeout(() => {
            greenButton.style.backgroundColor = "rgba(0,190,16,.5)";
        }, 300)
        userInputList.push(green);
    }
})

redButton.addEventListener ("click", (e) => {
    if (userTurn === true)
    {
        redButton.style.backgroundColor = "rgba(255, 0, 0, 1)";
        setTimeout(() => {
            redButton.style.backgroundColor = "rgba(255, 0, 0, .5)";
        }, 300)
        userInputList.push(red);
    }
})

blueButton.addEventListener ("click", (e) => {
    if (userTurn === true)
    {
        blueButton.style.backgroundColor = "rgba(0, 0, 255, 1)";
        setTimeout(() => {
            blueButton.style.backgroundColor = "rgba(0, 0, 255, .5)";
        }, 300)
        userInputList.push(blue);
    }
})

yellowButton.addEventListener ("click", (e) => {
    if (userTurn === true)
    {
        yellowButton.style.backgroundColor = "rgba(255, 255, 0, 1)";
        setTimeout(() => {
            yellowButton.style.backgroundColor = "rgba(255, 255, 0, .5)";
        }, 300)
        userInputList.push(yellow);
    }
})

function addStep() {
    pattern.push(Math.floor(Math.random() * 3));
}

function userInput() {
    userTurn = true;
    let temp = setTimeout(() => {
        userTurn = false;
        if (checkTurn())
        {
            score.innerText++;
            addStep();
            playPattern(0);
        } else {
            gameOver();
        }
    }, pattern.length * 2000)

}

function playPattern(i) {
    if (i < pattern.length){ 
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
    } else {
        userInput();
    }
}

function checkTurn() {
    let success = true;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== userInputList[i])
        success = false;   
    }
    return success;
}

function gameOver() {
    
}