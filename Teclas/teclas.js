var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var canvasId = document.getElementById("canvasId");
var papel = canvasId.getContext("2d");
var x = 150;
var y = 150;

dibujarLineas("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLineas(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "blue";
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLineas(colorcito, x, y, x, y = y - movimiento, papel);
            break;
        case teclas.DOWN:
            dibujarLineas(colorcito, x, y, x, y = y + movimiento, papel);
            break;
        case teclas.LEFT:
            dibujarLineas(colorcito, x, y, x = x - movimiento, y, papel);
            break;
        case teclas.RIGHT:
            dibujarLineas(colorcito, x, y, x = x + movimiento, y, papel);
            break;
        default:
            break;
    }
}