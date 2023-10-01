playerOneTurn = true;
drawChar = "X";
gameOver = false;
playerOneWins = null;

var playerOne = "";
var playerTwo = "";

var GameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
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

    SetUserNames();
}

function SetUserNames(){
    playerOne = prompt('Player One Name:');
    playerTwo = prompt('Player Two Name:');
}

function PrintTD(row, column){ // CReates string for each cell.
    return "<td onclick='ClickMe(" + (row) + "," + (column) + ")' id='" + (row) + "-" + (column) + "'>" + "</td>";
}

function ClickMe(row, column){ // Marks the cells.
    if(playerOneWins == null){
        cellClicked = document.getElementById(row + "-" + column);

        if(cellClicked.childNodes.length === 0){
            cellClicked.innerHTML = drawChar;
        }
        UpdateArray(row, column, drawChar) // Updates the array so we can check for a win condition.
        SwitchTurn() // Once the turn is played, we call this to switch the turn.
    }
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
            if(GameBoard[i][0] != null){
                gameOver = true;
                CheckWinner(i, 0);
            }
        }
    }

    for (let i = 0; i < 3; i++){ // Checks for vertical win.
        if(GameBoard[0][i] == GameBoard[1][i] && GameBoard[1][i] == GameBoard[2][i]){
            if(GameBoard[0][i] != null){
                gameOver = true;
                CheckWinner(0, i);
            }
        }
    }
    
    if(GameBoard[0][0] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][2]){
        if(GameBoard[0][0] != null){
            gameOver = true;
            CheckWinner(0, 0);
        }
    }

    if(GameBoard[0][2] == GameBoard[1][1] && GameBoard[1][1] == GameBoard[2][0]){
        if(GameBoard[0][2] != null){
            gameOver = true;
            CheckWinner(0, 2);
        }
    }

    if(gameOver == true){
        GameOver();
    }
}

function CheckWinner(row, column){
    if(GameBoard[row][column] == "X"){
        playerOneWins = true;
    }
    if(GameBoard[row][column] == "O"){
        playerOneWins = false;
    }
}

function GameOver(){
    if(playerOneWins == true){
        alert(playerOne + " Wins!");
    }
    if(playerOneWins == false){
        alert(playerTwo + " Wins!");
    }
}