const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");

let grids = [];
let rowLength = 16;
let columnLength = 16;

for (let row = 0; row < rowLength; row++) {
    // Store a new column array for each row iteration
    grids[row] = new Array();

    for (let column = 0; column < columnLength; column++) {
        grids[row][column] = document.createElement("div");
        grids[row][column].setAttribute("class", "square");
        container.appendChild(grids[row][column]);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style["background-color"] = "lightgrey";
    }
})

gridBtn.addEventListener('click', (e) => {
    let input = +prompt("Enter number of squares per side (maximum 100 per side)");

    if (checkSize(input)) {
        // Change grid size
        removeGrid(grids);
    }
})

function checkSize(input) {
    if (typeof input === "number" && input && input > 0 && input < 101)
        return true;

    return false;
}

function removeGrid(grids) {
    if (grids === undefined || grids.length === 0)
        return;

    for (let row = rowLength - 1; row >= 0; row--) {
        for (let column = columnLength - 1; column >= 0; column--) {
            container.removeChild(grids[row][column]);
            grids[row].splice(column, 1);
        }

        grids.splice(row, 1);
    }
    rowLength = 0;
    columnLength = 0;
}