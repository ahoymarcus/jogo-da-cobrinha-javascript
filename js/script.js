let canvas = document.getElementById("snake");

/*
    Essa var é responsável por renderizar o desenho no canvas.
*/
let context = canvas.getContext("2d");
let box = 32;


function criarBG() {
    context.fillStyle = "lightgreen";
    
    // aqui estamos desenhando o retângulo do jogo
    // Posições: X, Y, Altura, Largura
    context.fillRect(0, 0, 16 * box, 16 * box);
}


criarBG();












