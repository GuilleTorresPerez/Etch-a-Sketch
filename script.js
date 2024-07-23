let gridWidth = 16;
let gridSize = gridWidth * gridWidth;
let boardWidth = 750;
let boardSize = boardWidth * boardWidth;

document.addEventListener('DOMContentLoaded', function() {
    //Create grid
    const board = document.querySelector('.board');
    board.style.width = boardWidth + 'px';

    const cellSize = Math.floor(boardSize/gridSize);
    console.log('cell size is: ' + cellSize);
    const cellWidth = Math.sqrt(cellSize)
    console.log('cell width is: ' + cellWidth);
    for (let i = 0; i < gridWidth; i++) {
        for(let i = 0; i < gridWidth; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            console.log('width: ' + cell.style.width);
            board.appendChild(cell);
        }
    }
    
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.flex = '1 0 auto';
        cell.style.width = cellWidth+'px';
        cell.style.aspectRatio = '1 / 1';
        cell.style.boxSizing = 'border-box';

        cell.style.border = 'solid';
        cell.style.borderWidth = 'thin';
    });
}); 
