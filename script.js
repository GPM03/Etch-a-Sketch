const container = document.querySelector(".container");
const newEtchASketch = document.querySelector("#newEtchASketch");

let squaresPerSide = 16;
let gridItems = squaresPerSide ** 2;
let gridItemsWidth = 100 / squaresPerSide;

function randomRGB() {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

function randomBGColor(element) {
    element.setAttribute("style", `background-color: ${randomRGB()}; width: ${gridItemsWidth}%`)
}

function grid() {

    for (let i = 0; i < gridItems; i++) {
        const div = document.createElement("div");
        div.style.width = `${gridItemsWidth}%`;
        div.setAttribute("onmouseenter", "randomBGColor(this)");
        container.appendChild(div);
    }
}

grid();

newEtchASketch.addEventListener("click", () => {
    squaresPerSide = prompt("Type how many squares per side (max: 100, min: 1)");

    while (squaresPerSide > 100 || squaresPerSide < 1) {
        squaresPerSide = prompt("Type how many squares per side (max: 100, min: 1)");
    }
    
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    gridItems = squaresPerSide ** 2;
    gridItemsWidth = 100 / squaresPerSide;
    grid();
})