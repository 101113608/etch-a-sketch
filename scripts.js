const ROW_LENGTH = 16;
const COLUMN_LENGTH = 16;
const container = document.querySelector(".container");
const gridBtn = document.querySelector("#gridBtn");

let grids = [];

for (let row = 0; row < ROW_LENGTH; row++) {
    // Store a new column array for each row iteration
    grids[row] = new Array()

    for (let column = 0; column < COLUMN_LENGTH; column++) {;
        grids[row][column] = document.createElement("div");
        grids[row][column].setAttribute("class", "square");
        container.appendChild(grids[row][column]);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style["background-color"] = "lightgrey"
    }
})

gridBtn.addEventListener('click', (e) => {
    let input = +prompt("Enter number of squares per side (maximum 100 per side)");
})