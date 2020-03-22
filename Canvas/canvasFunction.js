var textId = document.getElementById("textId");
var buttonId = document.getElementById("buttonId");
buttonId.addEventListener("click", dibujoPorClick);

var canvasId = document.getElementById("canvasId");
var lienzo = canvasId.getContext("2d");
var color = "blue";
var width = canvasId.width;
var height = canvasId.height;

function dibujarLineas(color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    canvasId.width = canvasId.width;
    var lineas = parseInt(textId.value);
    dibujarLineas(color, 1, 1, 1, height-1);
    dibujarLineas(color, 1, height-1, width, height-1);

    for (i = 0; i < lineas; i++) {
        var xInicial = 0;
        var yInicial = (height / lineas) * i;
        var xFinal = (width / lineas) * (i + 1);
        var yFinal = height;

        dibujarLineas(color, xInicial, yInicial, xFinal, yFinal);
    }
}