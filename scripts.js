const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");

let grid = [];
let squaresPerSide = 16;

generateGrid(grid, squaresPerSide);

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style["background-color"] = "lightgrey";
    }
})

gridBtn.addEventListener('click', (e) => {
    let input = +prompt("Enter number of squares per side (maximum 100 per side)");

    if (checkSize(input)) {
        removeGrid(grid);
        generateGrid(grid, input);
    }
})

function checkSize(input) {
    if (typeof input === "number" && input && input > 0 && input < 101)
        return true;

    return false;
}

function generateGrid(grid, size) {
    squaresPerSide = size;

    for (let row = 0; row < squaresPerSide; row++) {
        // Store a new column array for each row iteration
        grid[row] = new Array();

        for (let column = 0; column < squaresPerSide; column++) {
            grid[row][column] = document.createElement("div");
            grid[row][column].setAttribute("class", "square");
            container.appendChild(grid[row][column]);
        }
    }
}

function removeGrid(grid) {
    if (grid === undefined || grid.length === 0)
        return;

    for (let row = squaresPerSide - 1; row >= 0; row--) {
        for (let column = squaresPerSide - 1; column >= 0; column--) {
            container.removeChild(grid[row][column]);
            grid[row].splice(column, 1);
        }

        grid.splice(row, 1);
    }
    squaresPerSide = 0;
}