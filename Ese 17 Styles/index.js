"use strict"

let btn;
let ref;

window.onload=function(){
    btn = document.getElementById("btnColore");
    btn.setAttribute("onclick","cambiaColore()");   //aggiunge l'onclick dinamicamente

    btn = document.getElementById("btnDimensione");
    btn.setAttribute("onclick","cambiaDimensione()");

    btn = document.getElementById("btnSfondo");
    btn.setAttribute("onclick", "cambiaSfondo()");

    btn = document.getElementById("btnBordo");
    btn.setAttribute("onclick", "cambiaBordo()");

    btn = document.getElementById("btnImg1");
    btn.setAttribute("onclick","caricaImmagine(value)");
    btn = document.getElementById("btnImg2");
    btn.setAttribute("onclick","caricaImmagine(value)");
    btn = document.getElementById("btnImg3");
    btn.setAttribute("onclick","caricaImmagine(value)");

    btn = document.getElementById("btnClear");
    btn.setAttribute("onclick","nascondiImmagine()");
}

function cambiaColore() {
    ref = document.getElementById("titolo");

    if (getComputedStyle(ref).backgroundColor == "rgb(0, 0, 255)")
    {
        ref.style.backgroundColor = "rgb(255, 255, 0)";
        ref.style.color = "rgb(0, 0, 255)";
    }
    else
    {
        ref.style.backgroundColor = "rgb(0, 0, 255)";
        ref.style.color = "rgb(255, 255, 0)";
    }
}

function cambiaDimensione() {
    ref = document.getElementById("titolo");
    let dim = document.getElementById("txtSize").value;

    ref.style.fontSize = dim + "pt";
}

function cambiaSfondo() {
    ref = document.getElementsByTagName("body")[0];

    if (ref.style.backgroundImage == "")
    {
        ref.style.background = "#eaeaea url(img/bg.gif) center repeat-y"
    }
    else
    {
        ref.style.backgroundImage = "";
        ref.style.backgroundColor = "#1E90FF";
    }
}

function cambiaBordo() {
    ref = document.getElementById("titolo");
    if(ref.style.border=="2px solid red")
    {
        ref.style.border="none";
    }
    else
    {
        ref.style.border="2px solid red";
    }

}

function caricaImmagine(value){
    ref = document.getElementById("imgBox");
    ref.setAttribute("src", "img/" + value + ".jpg");
}

function nascondiImmagine(){
    ref = document.getElementById("imgBox");
    ref.removeAttribute("src");
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}