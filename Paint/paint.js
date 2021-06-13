let colorViewer = document.getElementById('colorViewer');
let redSlider = document.getElementById('redSlider');
let blueSlider = document.getElementById('blueSlider');
let greenSlider = document.getElementById('greenSlider');
let addColorButton = document.getElementById('colorButton');
let colorBox = document.getElementById('colorBox');
let red = redSlider.value;
let blue = blueSlider.value;
let green = greenSlider.value;
let selectedColor = "rgb(255,0,0)";
let numColors = 3;

addColorEvents();

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

addColorButton.addEventListener("click", (e) => {
    addColor();
})

function addColorEvents(){
    let colors = document.getElementsByClassName('addedColor');
    for (i = 0; i < colors.length; i++)
    {
        colors[i].addEventListener("click", (e) => {
            document.querySelector(".selected").classList.remove('selected');
            e.target.classList.add('selected');
            selectedColor = e.target.value;
            console.log(selectedColor);
        })
    }
}

function addColor(){
    if(numColors < 8)
    {
        let added = document.createElement('button');
        added.classList.add('addedColor');
        added.value = `rgb(${red},${green},${blue})`;
        added.style.backgroundColor = `rgb(${red},${green},${blue})`;
        colorBox.append(added);
        addColorEvents();
        numColors++;
    }
}