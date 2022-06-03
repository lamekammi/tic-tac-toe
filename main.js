/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*----- app's state (variables) -----*/
let playerX = true;
let board = [ 
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];
let turn, winner;

/*----- cached element references -----*/
const tttBoardEl = document.getElementById('ttt-board');
const resetButton = document.getElementById('reset-game');
const squareElements = document.querySelectorAll('#square');
const whosTurn = document.getElementById('turn');


/*----- event listeners -----*/
resetButton.addEventListener('click', resetClickButton);

/*----- functions -----*/

function handleClick(squareClicked) {
  if ( squareElements[squareClicked].textContent === '*') {
    changeTurn();
  } else {
    return 
  }
  if ( playerX === true) {
    squareElements[squareClicked].textContent = 'X';
  } 
  if ( playerX === false) {
    squareElements[squareClicked].textContent = 'O';
  } 

}

for (let i = 0; i < squareElements.length; i++) {
  squareElements[i].addEventListener('click', () => { handleClick(i)});
}

function resetClickButton() {
 playerX = true;
 for (let i = 0; i < squareElements.length; i++) {
   squareElements[i].textContent = '*';
 }
 whosTurn.textContent = 'Click on a Square to Start the Game!';
};

function changeTurn() {
  playerX = !playerX;
  if ( playerX ) {
    whosTurn.textContent = "Player O's Turn!"
  } else {
    whosTurn.textContent = "Player X's Turn!"
  }

}

function initialize() {
  board = [ 
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];
  winner = null;
}

function checkForWins() {
  //foreach loop //includes
}

//