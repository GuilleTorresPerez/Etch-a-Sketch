let gridWidth = 16;
let boardWidth = 750;
let isMouseDown = false;
let darkeningFlag = false;

function getCellWidth(gridWidth, boardWidth) {
    const gridSize = gridWidth * gridWidth;
    const boardSize = boardWidth * boardWidth;
    const cellSize = Math.floor(boardSize/gridSize);
    return Math.sqrt(cellSize);
}

function createGrid(board, gridWidth) {
    for (let i = 0; i < gridWidth; i++) {
        for(let j = 0; j < gridWidth; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            board.appendChild(cell);
        }
    }
}

//delete all the divs with class cell
function deleteGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
}

function styleCells(cellWidth) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.flex = '1 0 auto';
        cell.style.width = cellWidth+'px';
        cell.style.aspectRatio = '1 / 1';
        cell.style.boxSizing = 'border-box';    
        // cell.style.border = 'solid';
        // cell.style.borderWidth = 'thin';
        
        cell.addEventListener('mouseover', function() {
            if(isMouseDown) {
                cell.style.backgroundColor = 'black';  
                if(darkeningFlag) {
                    let opacity = parseFloat(cell.style.opacity) || 0;  // Asegura que opacity tenga un valor numérico
                    opacity = Math.min(opacity + 0.1, 1);  // Asegura que opacity no sea menor a 0
                    cell.style.opacity = opacity.toString();
                } else {
                    cell.style.opacity = '1';              
                }

            }


        });

        cell.addEventListener('mousedown', function(e) {
            // console.log(e);
            isMouseDown = true;
            // cell.style.backgroundColor = 'black';
        });

        cell.addEventListener('mouseup', function() {
            isMouseDown = false;
        });

        // Prevenir el arrastre predeterminado
        cell.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
}

function paintGrid(color) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = color;
        cell.style.opacity = '0';
    });
}

// Función para cambiar los estilos del botón
function toggleButtonStyles(button, isActive) {
    if (isActive) {
        button.style.backgroundColor = '#36454F';
        button.style.color = '#EDEADE';
    } else {
        button.style.backgroundColor = '#FCFCFC';
        button.style.color = '#36454F';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    //Board
    const board = document.querySelector('.board');
    board.style.width = boardWidth + 'px';
    createGrid(board, gridWidth);
    
    //Syle cells
    let cellWidth = getCellWidth(gridWidth, boardWidth);
    styleCells(cellWidth);

    //Change size button
    const changeSizeButton = document.querySelector('.change-size');
    changeSizeButton.addEventListener('click', function() {
        gridWidth = handleInput(gridWidth);
        if (gridWidth === null) {
            return;
        }
        cellWidth = getCellWidth(gridWidth, boardWidth);
        deleteGrid();
        createGrid(board, gridWidth);
        styleCells(cellWidth);
    });

    //Clear button
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', function() {
        paintGrid('white');
    });

    //Darkening button
    const darkeningButton = this.documentElement.querySelector('.darkening');
    // Añadir evento al botón
    darkeningButton.addEventListener('click', function() {
        darkeningFlag = !darkeningFlag;
        console.log(darkeningFlag);
        toggleButtonStyles(darkeningButton, darkeningFlag);
    });
    
}); 

// Función para manejar la entrada del usuario, si el usuario cancela la entrada, la función
// devuelve null
function handleInput(gridWidth) {    
    let inputSize;
    let inputOk;

    do {
        inputOk = true;
        inputSize = window.prompt("Enter the grid size between 1 and 100");

        if (inputSize == null) {
            // console.log('Input size is null, returning null');
            return null;
        }

        inputSize = parseInt(inputSize);

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
