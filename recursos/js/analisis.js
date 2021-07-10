function ver(objeto) {
    var listado = document.getElementsByClassName('infoChar');
    let ancho = window.innerWidth
    for (i = 0; i < listado.length; i++) {
        if (ancho > 600){
            if (listado[i].id === objeto) {
                document.getElementById('placeholder').style.display = 'none';
                listado[i].style.display = 'inline-block';
            } else {
                listado[i].style.display = 'none';
            } 
        } else {
            if (listado[i].id === objeto) {
                document.getElementById('placeholder').style.display = 'none';
                listado[i].style.display = 'inline-block';
                document.getElementById('indice').style.display = 'none';
                document.getElementById('principal').style.display = 'table-cell';
                document.getElementById('botonlike').style.display = 'inline-block';
                document.getElementById('botonBackOn').style.display = 'inline-block';
            } else {
                listado[i].style.display = 'none';
            } 
        }
    }
}

function backOn () {
    document.getElementById('indice').style.display = 'table-cell';
    document.getElementById('botonlike').style.display = 'none';
    document.getElementById('botonBackOn').style.display = 'none';
    document.getElementById('char1').style.display = 'none';
    document.getElementById('char2').style.display = 'none';
    document.getElementById('char3').style.display = 'none';
    document.getElementById('char4').style.display = 'none';
    document.getElementById('char5').style.display = 'none';
    document.getElementById('char6').style.display = 'none';
    document.getElementById('placeholder').style.display = 'block';
}

$(window).resize(function (){
    let anchoPantalla = window.innerWidth;
    
    if (anchoPantalla > 760) {
        document.getElementById('principal').style.display = 'block';
        document.getElementById('indice').style.display = 'block';
    } else {
        document.getElementById('principal').style.display = 'table-cell';
        document.getElementById('indice').style.display = 'table-cell';
    }
});

function cambiar(objeto, pUrl) {
    document.getElementById(objeto).src = 'recursos/Imagenes/analisis/' + pUrl;
}

function animar() {
    document.querySelector('#mensaje').style.display = 'flex';
    document.querySelector('#mensaje').style.height = '300px';
    document.querySelector('#mensaje').style.width = '100%';
    document.querySelector('#mensaje').style.animation = 'palpitar 3s linear 0.25s infinite normal';
    document.querySelector('#mensaje > p').innerHTML = '¡Gracias por tu apoyo!';
    document.querySelector('#mensaje > p').style.fontSize = 'x-large';
    document.querySelector('#mensaje > p').style.fontWeight = 'bold'
    document.querySelector('#mensaje > p').style.color = "#1d1c41";
    document.querySelector('#mensaje > p').style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
}
