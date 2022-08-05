const cloudWrapper = document.querySelector('.clouds');
const roadWrapper = document.querySelector('.road');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// stato del mondo
const gameState = {
    objects: {
        clouds: [],
        roadLine: [], 
        food: [], 
        sonic: {
            element: document.querySelector('#sonic'), 
            isJumping: false,
            jumpTicks: 0,
            location: {
                y: 0, 
            }
        }, 
    }
};

// funzione di inzio gioco
function init() {
    let correntCloud = 1;
    const maxCloud = 4;
    
    // uso 30 nuvole
    for (let i = 0; i < 25; i++) {
        const cloudImage = document.createElement('img');
        cloudImage.src = `./media/cloud-${correntCloud}.png`;
        cloudImage.classList.add('cloud');
        
        const cloud = {
            element: cloudImage, 
            velocity: random(1,3),
            scale: random(0.7, 1.4),
            location: {
                y: random(-20,50), 
                x: random(-20,100),
            }
        } 
        
        cloud.element.style.opacity = random(10, 80) + '%';
        cloud.element.style.transform = `scale(${cloud.scale})`
        gameState.objects.clouds.push(cloud);
        cloudWrapper.appendChild(cloudImage)
        correntCloud += 1;
        if (correntCloud > maxCloud) {
            correntCloud = 1;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const roadLines = document.createElement('div')
        roadLines.classList.add('road-line');
        const roadLine = {
            element: roadLines, 
            velocity: 1,
            location: {
                y: 50, 
                x: (i * 26),
            }
        }
        gameState.objects.roadLine.push(roadLine); 
        roadLine.element.style.top = roadLine.location.y + '%';
        roadWrapper.appendChild(roadLines)
    }


    let currentFood = 1; 
    let maxFood = 3;

    for (let i = 0; i < 6; i++) {
        const foodImage = document.createElement('img')
        foodImage.src = `./media/food-${currentFood}.png`;
        foodImage.classList.add('food');
        const food = {
            element: foodImage, 
            velocity: random(1,2),
            location: {
                y: 20,
                x: random(-20,100),
            }
        }
        gameState.objects.food.push(food);
        roadWrapper.appendChild(foodImage);
        currentFood += 1;
        if (currentFood > maxFood) {
            currentFood = 1;
        }
        
    }
    
    draw();
}

function draw() {
    gameState.objects.clouds.forEach((cloud) => {
        cloud.element.style.top = cloud.location.y + '%';
        cloud.element.style.left = cloud.location.x + '%';
    });

    gameState.objects.roadLine.forEach((line) => {
        line.element.style.left = line.location.x + '%';
    });

    gameState.objects.food.forEach((f) => {
        f.element.style.left = f.location.x + '%';
        f.element.style.top = f.location.y + '%';
    });
    
    gameState.objects.sonic.element.style.top = gameState.objects.sonic.location.y + '%';
    
    setTimeout(updateLocation, 50);
}

function updateLocation() {
    const edgeCloudsWrapper = cloudWrapper.getBoundingClientRect();
    const edgeRoadLineWrapper = roadWrapper.getBoundingClientRect();
    gameState.objects.clouds.forEach((cloud) => {
        let edgeCloud = cloud.element.getBoundingClientRect();
        if ((edgeCloud.x + edgeCloud.width) <= edgeCloudsWrapper.x) {
            cloud.location.x = random(100, 120);
            cloud.location.y = random(-20, 50);
            cloud.scale = random(0.7, 1.4);
        } else {
            cloud.location.x -= cloud.velocity;
        }       
    });

    gameState.objects.roadLine.forEach((line) => {
        let edgeLine = line.element.getBoundingClientRect();
        if ((edgeLine.x + edgeLine.width) <= edgeRoadLineWrapper.x) {
            line.location.x = 110;
        } else {
            line.location.x -= line.velocity;
        }       
    });

    gameState.objects.food.forEach((f) => {
        let edgeFood = f.element.getBoundingClientRect();
        if ((edgeFood.x + edgeFood.width) <= edgeRoadLineWrapper.x) {
            f.location.x = random(100, 120);
        } else {
            f.location.x -= f.velocity;
        }       
    });

    
    if (gameState.objects.sonic.isJumping) {
        if (gameState.objects.sonic.jumpTicks < 5) {
            gameState.objects.sonic.location.y -= 60;
        } else {
            gameState.objects.sonic.location.y += 60;
        }
        gameState.objects.sonic.jumpTicks += 1;
        if (gameState.objects.sonic.jumpTicks === 10) {
            gameState.objects.sonic.isJumping = false;
            gameState.objects.sonic.location.y = 0;
            gameState.objects.sonic.jumpTicks = 0;
        }
    } 
    draw();
}

init();

// function to jump sonic to arrowUp key event
document.addEventListener('keydown', (event) => {
    if ( event.key === 'ArrowUp' ) {
        gameState.objects.sonic.isJumping = true;
    }
})
