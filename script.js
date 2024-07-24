let gridWidth = 16;
let boardWidth = 750;

function getCellWidth(gridWidth, boardWidth) {
    const gridSize = gridWidth * gridWidth;
    const boardSize = boardWidth * boardWidth;
    const cellSize = Math.floor(boardSize/gridSize);
    return Math.sqrt(cellSize);
}

document.addEventListener('DOMContentLoaded', function() {
    //Create grid
    const board = document.querySelector('.board');
    board.style.width = boardWidth + 'px';
    const cellWidth = getCellWidth(gridWidth, boardWidth);
    for (let i = 0; i < gridWidth; i++) {
        for(let i = 0; i < gridWidth; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.appendChild(cell);
        }
    }
    
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.flex = '1 0 auto';
        cell.style.width = cellWidth+'px';
        cell.style.aspectRatio = '1 / 1';
        cell.style.boxSizing = 'border-box';    
        // cell.style.border = 'solid';
        // cell.style.borderWidth = 'thin';

        cell.addEventListener('mouseover', function(e) {
            // console.log(e);
            cell.style.backgroundColor = 'black';
        });
    });
}); 
