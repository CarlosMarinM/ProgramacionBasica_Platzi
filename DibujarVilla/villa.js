var vp = document.getElementById("canvasId");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.gif",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.gif",
    cargaOK: false
}

var gallina = {
    url: "gallina.gif",
    cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

gallina.imagen = new Image();
gallina.imagen.src = gallina.url;
gallina.imagen.addEventListener("load", cargarGallina);

vp.addEventListener("mouseup", seleccionarImagen);

function seleccionarImagen(evento) {
    console.log(evento);
    console.log(papel);
}

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}

function cargarGallina() {
    gallina.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        var cantidad = aleatorio(0, 56);
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 13);
            var y = aleatorio(0, 13);
            x = x * 35;
            y = y * 35;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOK) {
        var cantidad = aleatorio(0, 56);
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 13);
            var y = aleatorio(0, 13);
            x = x * 35;
            y = y * 35;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if (gallina.cargaOK) {
        var cantidad = aleatorio(0, 56);
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 13);
            var y = aleatorio(0, 13);
            x = x * 35;
            y = y * 35;
            papel.drawImage(gallina.imagen, x, y);
        }
    }
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}