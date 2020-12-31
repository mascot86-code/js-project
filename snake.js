const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ground = new Image();
ground.src = 'img/ground.png';

const foodImg = new Image();
foodImg.src = 'img/food.png';

const wallImg = new Image();
wallImg.src = 'img/bomb.png';

const wallImgTwo= new Image();
wallImgTwo.src = 'img/dynamite.png';


let box = 32;

let score = 0;

let food = {

x: Math.floor((Math.random() * 17 + 1)) * box,
y: Math.floor((Math.random() * 15 + 3)) * box,

};


let wall = {

    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,

};

let wallTwo = {

    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,

};


let snake = [];
snake[0] = {

x: 9 * box,
y: 10 * box,

};


document.addEventListener('keydown', direction);

let dir;

function direction(event) {

if(event.keyCode == 37 && dir != 'right') {

dir = 'left';

} else if (event.keyCode == 38 && dir != 'down') {

    dir = 'up';
    
} else if (event.keyCode == 39 && dir != 'left') {

    dir = 'right';

} else if (event.keyCode == 40 && dir != 'up') {


    dir = 'down';

}

};

function eatTail(head , arr) {

for(let i = 0; i < arr.length; i++) {

if(head.x == arr[i].x && head.y == arr[i].y)

clearInterval(game, alert('Увы, игра окончена. Вы проиграли!'));

}

}

function drawGame() {

    ctx.drawImage(ground, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y);

    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle = i == 0 ? 'red' : 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box );

    }

    ctx.drawImage(wallImg, wall.x , wall.y);

    ctx.drawImage(wallImgTwo, wallTwo.x , wallTwo.y);

    


    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText (score, box * 2.5, box * 1.6);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if(snakeX == food.x && snakeY == food.y) {

        score++;
        food = {

            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,      

    }

    } else {

        snake.pop();

    }
    
    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17)
    
        clearInterval(game, alert('Увы, игра окончена. Вы проиграли!'));
        
    if(snakeX == wall.x && snakeY == wall.y || snakeX == wallTwo.x && snakeY == wallTwo.y) {

        clearInterval(game, alert('Увы, игра окончена. Вы проиграли!')); 
        
    }


    if(dir == 'left') snakeX -= box;
    if(dir == 'right') snakeX += box;
    if(dir == 'up') snakeY -= box;
    if(dir == 'down') snakeY += box;

    let newHead = {

        x: snakeX,
        y: snakeY

    };

    eatTail(newHead, snake);

    snake.unshift(newHead);   

}


let game = setInterval(drawGame, 100,);