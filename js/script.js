let canvas = document.getElementById("snake");

/*
    Essa var é responsável por renderizar o desenho no canvas.
*/
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};
let direction = "right";


function criarBG() {
    context.fillStyle = "lightgreen";
    
    // aqui estamos desenhando o retângulo do jogo
    // Posições: X, Y, Altura, Largura
    context.fillRect(0, 0, 16 * box, 16 * box);
};


function criarCobrinha() {
    /*será feita com um array: e se mov com acrescentar na 1ª pos e retirar da última pos*/
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
};


// rastreando a cobrinha
// 37 => direita
// 38 => para baixo
// 39 => esquerda
// 40 => para cima
document.addEventListener('keydown', update);

function update(event) {
    
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";   
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}




function iniciarJogo() {
    
    // lembrando que snake[0] é a cabeça. Aqui, se ele
    // alcança o fim do lado esq, mudamos sua prop
    // para ela reaparecer à esq!
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    
    
    criarBG();
    criarCobrinha();
    
    /*def ponto de partida*/
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    
    snake.pop();
    
    // unshift() para inseria a cabeça
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);











