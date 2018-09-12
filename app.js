let cells = document.querySelectorAll('.cell');
let currentPlayerSymbol = 'X';

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});


function cellClicked(e) {
    if (currentPlayerSymbol === 'X') {
        e.target.innerText = currentPlayerSymbol;
        currentPlayerSymbol = 'O';
    } else {
        e.target.innerText = currentPlayerSymbol;
        currentPlayerSymbol = 'X';
    }
}

if (currentPlayerSymbol != " ") {
    return;
}