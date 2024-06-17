const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");

let gridColumn = [];
let gridRow = [];
let squaresPerSide = 16;

generateGrid(gridColumn, gridRow, squaresPerSide);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("row")) {
        e.target.style["background-color"] = randomiseColour();
    }
})

gridBtn.addEventListener('click', (e) => {
    let input = +prompt("Enter number of squares per side (maximum 100 per side)");

    if (checkSize(input)) {
        removeGrid(gridColumn, gridRow);
        generateGrid(gridColumn, gridRow, input);
    }
})

function checkSize(input) {
    if (typeof input === "number" && input && input > 0 && input < 101)
        return true;

    return false;
}

function generateGrid(gridColumn, gridRow, size) {
    squaresPerSide = size;

    for (let column = 0; column < squaresPerSide; column++) {
        gridColumn[column] = document.createElement("div");
        gridColumn[column].setAttribute("class", "column");

        for (let row = 0; row < squaresPerSide; row++) {
            gridRow[row] = document.createElement("div");
            gridRow[row].setAttribute("class", "row");
            gridColumn[column].appendChild(gridRow[row]);

        }
        container.appendChild(gridColumn[column]);
    }
}

function removeGrid(gridColumn, gridRow) {
    if (gridColumn === undefined || gridColumn.length === 0 || gridRow === undefined || gridRow.length === 0)
        return;

    for (let column = gridColumn.length - 1; column >= 0; column--) {
        for (let row = gridRow.length - 1; row >= 0; row--) {
            gridColumn[column].removeChild(gridRow[row]);
            gridRow.splice(row, 1);
        }
        container.removeChild(gridColumn[column]);
        gridColumn.splice(column, 1);
    }
    squaresPerSide = 0;
}

function randomiseColour() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}