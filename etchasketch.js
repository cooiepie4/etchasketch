function populateBoard(size){
  let board = document.getElementById('board'); // Get the element by ID
  board.innerHTML='';
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
let amount = size*size
for (let i = 0; i < amount; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.style.backgroundColor = 'white'; // Add quotes around the color
  board.appendChild(square); // Use appendChild for simplicity
}
board.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.style.backgroundColor = 'black';
  }
});

board.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('square')) {
    event.target.style.backgroundColor = 'grey';
  }
});
}
populateBoard(16);


function changeSize(input){
  parseInt(input);
  populateBoard(input);
}

