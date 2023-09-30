playerOneTurn = true;
drawChar = "X";
gameOver = false;

var GameBoard = [
    ["0-0", "0-1", "0-2"],
    ["1-0", "1-1", "1-2"],
    ["2-0", "2-1", "2-2"]
];

function MakeBoard(){
    for (let i = 0; i < 3; i++){

        rowOut = "<tr>"; // Begins printout.

        for (let ii = 0; ii < 3; ii++){ // Sets the ID to look for the event listener.
            rowOut += PrintTD(i, ii);
        }

        rowOut += "</tr>"; // Append to end of string.
        document.getElementById("GameTable").innerHTML += rowOut; // Print table row.
    }
}

function PrintTD(row, column){ // CReates string for each cell.
    return "<td onclick='ClickMe(" + (row) + "," + (column) + ")' id='" + (row) + "-" + (column) + "'>" + "</td>";
}

function ClickMe(row, column){ // Marks the cells.
    cellClicked = document.getElementById(row + "-" + column);

    if(cellClicked.childNodes.length === 0){
        cellClicked.innerHTML = drawChar;
    }
    UpdateArray(row, column, drawChar) // Updates the array so we can check for a win condition.
    SwitchTurn() // Once the turn is played, we call this to switch the turn.
}

function SwitchTurn(){ // Switches the current turn.
    playerOneTurn = !playerOneTurn;

    if(playerOneTurn == true){
        drawChar = "X";
    }
    if(playerOneTurn == false){
        drawChar = "O";
    }
}

function UpdateArray(row, column, drawChar){
    GameBoard[row][column] = drawChar;
    GameBoard.forEach(v=>console.log(...v));

    for (let i = 0; i < 3; i++){ // Checks for horizontal win.
        if(GameBoard[i][0] == GameBoard[i][1] && GameBoard[i][1] == GameBoard[i][2]){
            gameOver = true;
        }
    }

    for (let i = 0; i < 3; i++){ // Checks for vertical win.
        if(GameBoard[0][i] == GameBoard[1][i] && GameBoard[1][i] == GameBoard[2][i]){
            gameOver = true;
        }
    }
    
    if(GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2]){
        gameOver = true;
    }

    if(GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0]){
        gameOver = true;
    }

    if(gameOver == true){
        GameOver();
    }
}

function GameOver(){
    alert("Somebody won! I need to figure out how to get this to say the right thing.")
}