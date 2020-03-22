var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


var canvasId = document.getElementById("canvasId");
var papel = canvasId.getContext("2d");
var width = canvasId.width;
var height = canvasId.height;
var xInicial = 150;
var yInicial = 150;
var color = "red"
canvasId.addEventListener("mousedown", presionarMouse);

dibujarLineas("black", 0, 0, 0, height, papel);
dibujarLineas("black", 0, height, width, height, papel);
dibujarLineas("black", width, height, width, 0, papel);
dibujarLineas("black", width, 0, 0, 0, papel);
dibujarLineas(color, xInicial - 1, yInicial - 1, xInicial + 1, yInicial + 1, papel);

function dibujarLineas(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function presionarMouse(evento) {
    console.log(evento);
    xInicial = evento.layerX;
    yInicial = evento.layerY;
    canvasId.addEventListener("mousemove", dibujarMouse);
    canvasId.addEventListener("mouseup", detenerDibujo);
    dibujarLineas(color, xInicial - 1, yInicial - 1, xInicial + 1, yInicial + 1, papel);
}

function dibujarMouse(evento) {
    console.log(evento);
    xFinal = evento.layerX;
    yFinal = evento.layerY;
    dibujarLineas(color, xInicial, yInicial, xFinal, yFinal, papel);
    xInicial = xFinal;
    yInicial = yFinal;
}

function detenerDibujo(evento) {
    console.log(evento);
    canvasId.removeEventListener("mousemove", dibujarMouse);
}