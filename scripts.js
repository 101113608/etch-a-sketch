const ROW_LENGTH = 16;
const COLUMN_LENGTH = 16;
const container = document.querySelector(".container");

let grids = [];

for (let row = 0; row < ROW_LENGTH; row++) {
    // Store a new column array for each row iteration
    grids[row] = new Array()

    for (let column = 0; column < COLUMN_LENGTH; column++) {;
        grids[row][column] = document.createElement("div");
        container.appendChild(grids[row][column]);
    }
}