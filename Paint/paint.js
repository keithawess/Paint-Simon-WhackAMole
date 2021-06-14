const colorViewer = document.getElementById("colorViewer");
const redSlider = document.getElementById("redSlider");
const blueSlider = document.getElementById("blueSlider");
const greenSlider = document.getElementById("greenSlider");
const addColorButton = document.getElementById("colorButton");
const colorBox = document.getElementById("colorBox");
const drawingPad = document.getElementById("drawingPad");
const ctx = drawingPad.getContext("2d");
const clearButton = document.getElementById("clear");
const emptyPalette = document.getElementById("emptyPalette");
const lineRange = document.getElementById('lineRange');
let red = redSlider.value;
let blue = blueSlider.value;
let green = greenSlider.value;
let selectedColor = "rgb(255,0,0)";
let numColors = 3;
let isDrawing = false;
let x = 0;
let y = 0;
let lWidth = 1;

addColorEvents();

//Event Listeners

redSlider.addEventListener("mousedown", (e) => {
    redSlider.addEventListener("mousemove", (e) => {
        red = redSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
});

greenSlider.addEventListener("mousedown", (e) => {
    greenSlider.addEventListener("mousemove", (e) => {
        green = greenSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
});

blueSlider.addEventListener("mousedown", (e) => {
    blueSlider.addEventListener("mousemove", (e) => {
        blue = blueSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
});

addColorButton.addEventListener("click", (e) => {
    addColor();
});

emptyPalette.addEventListener("click", (e) => {
    let list = document.querySelectorAll('.addedColor');
    for(i = 3; i < list.length; i++)
    {
        list[i].remove();
    }
})

lineRange.addEventListener("mousemove", (e) => {
    lWidth = lineRange.value;
})

clearButton.addEventListener("click", (e) => {
    ctx.clearRect(0, 0, 700, 375);
});

drawingPad.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
});

drawingPad.addEventListener("mousemove", (e) => {
    if (isDrawing == true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

drawingPad.addEventListener("mouseleave", (e) => {
    isDrawing = false;
});

window.addEventListener("mouseup", (e) => {
    if (isDrawing === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

//Functions

function addColorEvents() {
    let colors = document.getElementsByClassName("addedColor");
    for (i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", (e) => {
            document.querySelector(".selected").classList.remove("selected");
            e.target.classList.add("selected");
            selectedColor = e.target.value;
            console.log(selectedColor);
        });
    }
}

function addColor() {
    if (numColors < 8) {
        let added = document.createElement("button");
        added.classList.add("addedColor");
        added.value = `rgb(${red},${green},${blue})`;
        added.style.backgroundColor = `rgb(${red},${green},${blue})`;
        colorBox.append(added);
        addColorEvents();
        numColors++;
    }
}

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = selectedColor;
    context.lineWidth = lWidth;
    context.lineCap = "round";
    context.lineJoin = "bevel"
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
}
