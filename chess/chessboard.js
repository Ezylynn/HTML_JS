const main = document.querySelector("main")
const table = document.createElement("table")
const tableBody = document.createElement("tbody") 
table.appendChild(tableBody)
main.append(table)


// algorithm for the chessboard

function createChessBoard(row){
    for ( let i=1;i <= row; i++) {
        // create row for each iteration
        var newRow = document.createElement("tr")
        // make the first row layout
        for (let j=1; j <= 4; j++){
            let cell = document.createElement("td")
            let cell_2 = document.createElement("td")

            if (i%2 === 0){
              cell.classList.add("black");
              cell_2.classList.add("white");

            }

            else {
              cell.classList.add("white");
              cell_2.classList.add("black");
 
              }

            newRow.appendChild(cell);
            newRow.appendChild(cell_2);
        }

        tableBody.appendChild(newRow)
    }

}

function addChessPiece(){
  
}

createChessBoard(8)