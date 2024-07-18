
document.addEventListener('DOMContentLoaded', function() {
    //Create grid
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 16; i++) {
        for(let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            container.appendChild(cell);
        }
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.width = '20px';
        cell.style.aspectRatio = '1 / 1';
        // cell.style.border = 'solid';
    });
}); 
