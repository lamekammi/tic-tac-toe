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
//let gameActive = true;
let currPlayer = 1;
//let board = [
  //  [null, null, null],
    //[null, null, null],
    //[null, null, null],
//]
let board = [null, null, null, null, null, null, null, null, null];

/*----- cached element references -----*/
const tttBoardEl = document.getElementById('ttt-board');
const resetButton = document.getElementById('reset-game');


/*----- event listeners -----*/
//resetButton.addEventListener('click'. handleClick);
//tttBoardEl.addEventListener('click', handleClick);



/*----- functions -----*/
//function initGame() {

//};

//function handClick() {

//}

//function handleRestartGame() {

//};

// update currPlayer to change the turn
//function changeTurn() {

//}


// attach an event listner to the board, figure out which square was clicked.
// comsole.log to check which square was clicked
// use info from square that was clicked to update the state
// once all state has been updated rerender the DOM to reflect the changes in state.
// make render function