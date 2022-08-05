// seleccionar el juego
const gameElement = document.querySelector('#game');
// display score 
const scoreElement = document.querySelector('#score');
// parametros de inicio
const numRow = 40;
const numCol = 40;

// directions increase and descrease rows and cols
/* const directions = {
    'up': -1, 
    'down': 1, 
    'left': -1, 
    'right': 1
}; */ 

// frame time moving 
const frameRate = 100;

const gameState = {
    score: 0,
    snake: {
        // default direction up, update it with event 
        direction: {
            row: -1, 
            col: 0
        },
        head: {
            row: Math.floor(numRow / 2) + 1,  
            col: Math.floor(numCol / 2) + 1,
        }, 
        tail : []
    }, 
    apple: {}
}

gameState.apple = getAppleRandomLocation()

function initGrid() {
    // parametrizar los valores de la linea y de las cols 
    gameElement.style.gridTemplateRows = `repeat(1fr, ${numRow})`;
    gameElement.style.gridTemplateCols = `repeat(1fr, ${numCol})`;
    const grid = {};
    for (let row = 1; row <= numRow; row++) {
        for (let col = 1; col <= numCol; col++) {
            const cellElement = document.createElement('div')
            cellElement.classList.add('cell')
            cellElement.style.gridRow = row
            cellElement.style.gridColumn = col
            gameElement.appendChild(cellElement)
            grid[`${row}, ${col}`] = cellElement;
        }
    }
    return grid;
}

// initGrid();
const grid = initGrid();

function draw() {
    
    // removing previous head snake
    document.querySelectorAll('.cell').forEach((cell) => {
        cell.classList.remove('snake-head')
        cell.classList.remove('apple')
        cell.classList.remove('snake-tail')
    });
    
    // TODO: cosa succede se non metti a f() initGrid in una const ?
    const headCell = grid[`${gameState.snake.head.row}, ${gameState.snake.head.col}`];
    headCell.classList.add('snake-head');

    const appleCell = grid[`${gameState.apple.row}, ${gameState.apple.col}`];
    appleCell.classList.add('apple');

    gameState.snake.tail.forEach((cell) => {
        const bodyElement = grid[`${cell.row}, ${cell.col}`];
        bodyElement.classList.add('snake-tail');
    })

    scoreElement.textContent = gameState.score;

    setTimeout(update, frameRate);
}

function update() {

    if (gameState.snake.head.row === gameState.apple.row && gameState.snake.head.col === gameState.apple.col) {
        // increse score 
        gameState.score += 1;        
        // give random location to apple 
        gameState.apple = getAppleRandomLocation();
        // increase tail
        gameState.snake.tail.push(gameState.apple)
    }
    
    // put the head at top if the tail 
    gameState.snake.tail.unshift({
        ...gameState.snake.head
    })
    gameState.snake.tail.pop();

    gameState.snake.head.row += gameState.snake.direction.row
    gameState.snake.head.col += gameState.snake.direction.col

    if (gameState.snake.head.row <= 0 || gameState.snake.head.row > numRow || gameState.snake.head.col <= 0 || gameState.snake.head.col > numCol) {
        alert('GAME OVER 💀');
    }
    // to show moviment default to the top
    /* if (gameState.snake.direction === 'up') {
        gameState.snake.head.row += directions.up
    } else if (gameState.snake.direction === 'down') {
        gameState.snake.head.row += directions.down
    } else if (gameState.snake.direction === 'left') {
        gameState.snake.head.col += directions.left
    } else if (gameState.snake.direction === 'right') {
        gameState.snake.head.col += directions.right
    } */

    setTimeout(draw, frameRate);
}

function getAppleRandomLocation() {
    const randomRow = Math.floor(Math.random() * numRow) + 1;
    const randomCol = Math.floor(Math.random() * numCol) + 1;
    
    // logic if colloides head and tail with the apple 
    const cells = [gameState.snake.head, ...gameState.snake.tail];
    if (cells.some((cell) => cell.row === randomRow && cell.col === randomCol)) {
        return getAppleRandomLocation()
    }
    // object cell to fill with apple randomily
    return {
        row: randomRow, 
        col: randomCol
    }
}


// updating gameState.snake.direction values with event keydown 
document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
            if(gameState.snake.direction.col === 1) break;
            gameState.snake.direction.row = 0
            gameState.snake.direction.col = -1
        break;
        case 'ArrowRight':
            if(gameState.snake.direction.col === -1) break;
            gameState.snake.direction.row = 0
            gameState.snake.direction.col = 1
        break;
        case 'ArrowUp':
            if(gameState.snake.direction.row === 1) break;
            gameState.snake.direction.row = -1
            gameState.snake.direction.col = 0
        break;
        case 'ArrowDown': 
            if(gameState.snake.direction.row === -1) break;
            gameState.snake.direction.row = 1
            gameState.snake.direction.col = 0
        break;
        
        default:
        break;
    }
})

draw();