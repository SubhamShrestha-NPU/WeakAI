var currentPlayer = "X";
const usedCells = [];
const winningCombos = [
    [1, 2, 3], // Horizontal
    [4, 5, 6], // Horizontal
    [7, 8, 9], // Horizontal
    [1, 4, 7], // Vertical
    [2, 5, 8], // Vertical
    [3, 6, 9], // Vertical
    [1, 5, 9], // Diagonal
    [3, 5, 7]  // Diagonal
];
let playerX = [];
let playerO = [];

function renderMark(id) {
    if (usedCells.includes(id)) {
        return;
    } // Checks whether the clicked element is already occupied
    
    // If not occupied then renders the current player's sign
    document.getElementById("cl" + id).innerHTML = currentPlayer;

    // Adds the occupied element to an array, to keep track of board status
    usedCells.push(id);

    // Add the move to the respective player's array
    if (currentPlayer === "X") {
        playerX.push(id);
    } else {
        playerO.push(id);
    }

    // Check for a win before toggling the current player
    if (checkWin(currentPlayer === "X" ? playerX : playerO)) {
        document.getElementById('winner').innerHTML = 'Player ' + (currentPlayer === "X" ? "X" : "O") + ' wins!';
        return;
    }

    // Toggles the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log('Clicked cell: ' + usedCells.at(-1));
}

function checkBoardStatus() {
    console.log('Player X: ' + playerX.join(', '));
    console.log('Player O: ' + playerO.join(', '));
}

function checkWin(player) {
    return winningCombos.some(combo => combo.every(cell => player.includes(cell)));
}

// MiniMax algorithm

