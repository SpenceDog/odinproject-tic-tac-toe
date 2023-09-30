playerOneTurn = true;
drawChar = "X";


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