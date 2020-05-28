"use strict"

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");
    let _btnStop = document.getElementById("btnStop");
    let _btnRestart = document.getElementById("btnRestart");

    let timer = setInterval(generaOggetti,100);
    _btnRestart.disabled = true;

    let wrapperWidth = parseInt(getComputedStyle(_wrapper).width);
    let wrapperHeight = parseInt(getComputedStyle(_wrapper).height);

    _btnStop.addEventListener("click", function () {
        if (timer) clearInterval(timer);
        this.disabled = true;
        _btnRestart.disabled = false;
    });

    _btnRestart.addEventListener("click", function () {
        timer = setInterval(generaOggetti, 100);
        this.disabled = true;
        _btnStop.disabled = false;
    });


    function generaOggetti() {
        //crea un tag div in memoria NON visibile all'interno della pagina
        let _div = document.createElement("div");

        //Genero e assegno width e height
        let w = generaNumero(1,100);    //larghezza
        let h = generaNumero(1,100);    //altezza
        _div.style.width = w;
        _div.style.height = h;

        //Genero e assegno colore di sfondo casuale
        let red = generaNumero(0,255);
        let green = generaNumero(0,255);
        let blue = generaNumero(0,255);
        _div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

        //Genero e assegno posizione
        let x = generaNumero(0, wrapperWidth - w);
        let y = generaNumero(0, wrapperHeight - h);
        _div.style.position = "absolute";
        _div.style.left = x;
        _div.style.top = y;

        //Appendo _div al wrapper
        _wrapper.appendChild(_div);
    }
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}