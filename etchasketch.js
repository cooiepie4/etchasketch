const GRIDSIDE = 600;
const rows = 16;
const columns =16;

const container = document.querySelector('#container');
container.style.width = `${GRIDSIDE}px`;
container.style.height = `${GRIDSIDE}px`;

function createGridCell (){
    for(let i = 0; i < (rows * columns); i++){
    const gridCell = document.createElement("div");
    gridCell.style.width = `${(GRIDSIDE/columns)-2}px`;
    gridCell.style.height = `${(GRIDSIDE/rows)-2}px`;
    gridCell.classList.add("cell");
    container.appendChild(gridCell);
    }
}

createGridCell();
