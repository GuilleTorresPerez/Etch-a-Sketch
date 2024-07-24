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
        for(let j = 0; j < gridWidth; j++) {
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

    const changeSizeButton = document.querySelector('button');
    changeSizeButton.addEventListener('click', function() {
        const newInput = handleInput();
        gridWidth = newInput;
    });
    
}); 

function handleInput() {    
    let inputSize;
    let inputOk;

    do {
        inputOk = true;
        inputSize = parseInt(window.prompt("Enter the grid size between 1 and 100"));
        if (inputSize == null) {
            return -1;
        }

        if (isNaN(inputSize)) {
            alert("The input must be a number");
            inputOk = false;
        }

        if (inputSize < 1 || inputSize > 100) {
            alert("The size must be between 1 and 100");
            inputOk = false;
        }
    } while (!inputOk);

    return inputSize;
}
