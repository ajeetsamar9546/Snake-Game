let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('music/audio4.mp3');
const moveSound = new Audio('music/audio3.mp3');
let speed = 12;
let lastPaintTime = 0;
let snakeArr = [{ x: 13,y: 15 }];
let food = { x: 9,y:8};
let score = 0;

function main(ctime) {
    requestAnimationFrame(main);
    // console.log(ctime)

    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snakeArr) {
    for(let i=1;i<snakeArr.length;i++){
        if(snakeArr[i].x===snakeArr[0].x && snakeArr[i].y===snakeArr[0].y)
        {
            return true;
        }
    }
    if(snakeArr[0].x>=18 || snakeArr[0].x<=0 || snakeArr[0].y>=18 || snakeArr[0].y<=0)
    {
            return true;
    }
    return false;
}
function gameEngine() {
    // Updating the snake array
    if (isCollide(snakeArr)) {
        inputDir = { x: 0, y: 0 }
        alert('Game Over. Press any key to play again!')
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        moveSound.pause();
        score++;
        let scoreBox=document.getElementById('scoreBox');
        scoreBox.innerHTML="Score: "+score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }// formula to generate random number between a to b

    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }


    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Display the snake
    let board = document.getElementById("board")
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.x;
        snakeElement.style.gridColumnStart = e.y;

        if (index === 0) {
            snakeElement.classList.add('head');
        }
        else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })

    // Display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add('food')
    board.appendChild(foodElement);

}

requestAnimationFrame(main);
window.addEventListener('keydown', (e) => {
    inputDir = { x: 0, y: 1 } // start the game

    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        default:
            break;
    }
})














