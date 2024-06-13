const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");

let grids = [];
let squaresPerSide = 16;

generateGrid(grids, squaresPerSide);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style["background-color"] = "lightgrey";
    }
})

gridBtn.addEventListener('click', (e) => {
    let input = +prompt("Enter number of squares per side (maximum 100 per side)");

    if (checkSize(input)) {
        removeGrid(grids);
        generateGrid(grids, input);
    }
})

function checkSize(input) {
    if (typeof input === "number" && input && input > 0 && input < 101)
        return true;

    return false;
}

function generateGrid(grids, size) {
    squaresPerSide = size;

    for (let row = 0; row < squaresPerSide; row++) {
        // Store a new column array for each row iteration
        grids[row] = new Array();

        for (let column = 0; column < squaresPerSide; column++) {
            grids[row][column] = document.createElement("div");
            grids[row][column].setAttribute("class", "square");
            container.appendChild(grids[row][column]);
        }
    }
}

function removeGrid(grids) {
    if (grids === undefined || grids.length === 0)
        return;

    for (let row = squaresPerSide - 1; row >= 0; row--) {
        for (let column = squaresPerSide - 1; column >= 0; column--) {
            container.removeChild(grids[row][column]);
            grids[row].splice(column, 1);
        }

        grids.splice(row, 1);
    }
    squaresPerSide = 0;
}