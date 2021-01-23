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



criarBG();
criarCobrinha();











