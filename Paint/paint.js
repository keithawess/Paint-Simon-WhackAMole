let colorViewer = document.getElementById('colorViewer');
let redSlider = document.getElementById('redSlider');
let blueSlider = document.getElementById('blueSlider');
let greenSlider = document.getElementById('greenSlider');
let addColorButton = document.getElementById('colorButton');
let colorBox = document.getElementById('colorBox');
let red = redSlider.value;
let blue = blueSlider.value;
let green = greenSlider.value;

let addedColors = ["rgb(255,0,0)", "rgb(0,255,0", "rgb(255,255,0)"]

redSlider.addEventListener("mousedown", (e) => {
    redSlider.addEventListener("mousemove", (e) => {
        red = redSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
})

greenSlider.addEventListener("mousedown", (e) => {
    greenSlider.addEventListener("mousemove", (e) => {
        green = greenSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
})

blueSlider.addEventListener("mousedown", (e) => {
    blueSlider.addEventListener("mousemove", (e) => {
        blue = blueSlider.value;
        colorViewer.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
})

