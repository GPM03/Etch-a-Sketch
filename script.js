const container = document.querySelector(".container");
const newGrid = document.querySelector("#newGrid");

let squaresPerSide = 16;
let gridItems = squaresPerSide ** 2;
let gridItemsWidth = 100 / squaresPerSide;

function randomRGB() {
    let red = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    let blue = Math.round(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

function setStyle(element) {
    const getStyle = element.getAttribute("style");
    const searchOpacity = getStyle.search("opacity");
    let opacity = Number(getStyle.slice(searchOpacity + 9, -1));

    element.style.backgroundColor = `${randomRGB()}`;
    element.style.width = `${gridItemsWidth}`;

    if (searchOpacity === -1) {
        element.style.opacity = "0.1";
    } else if (opacity < 1){
        opacity = opacity * 100 + 10;
        element.style.opacity = `${opacity}%`;
    }
}

function grid() {

    for (let i = 0; i < gridItems; i++) {
        const div = document.createElement("div");
        div.style.width = `${gridItemsWidth}%`;
        div.setAttribute("onmouseenter", "setStyle(this)");
        container.appendChild(div);
    }
}

grid();

newGrid.addEventListener("click", () => {
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