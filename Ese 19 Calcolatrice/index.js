"use strict"

let _btnOperatore;
let _txtDisplay;
let _btnNum;
let _btnRis;

let aus=0;
let n1=0;
let n2=0;
let ris=0;
let op="";

window.onload=function(){    
    _btnOperatore=document.getElementsByName("btnOperatore");
    _txtDisplay=document.getElementById("txtDisplay");
    _btnNum=document.getElementsByName("btnNum");
    _btnRis=document.getElementById("btnRis");

    ris=0;
}
function resetta() { 
    _txtDisplay.value="";
    aus=0;
    n1=0;
    n2=0;
    ris=0;
}

function aggiungi(valore){
    if(aus==0)
    {
        aus=valore;
    }
    else
    {
        aus+=valore;
    }
    n1=parseFloat(aus);
    _txtDisplay.value=aus;
}

function addizione() {
    op = "somma";
    _txtDisplay.value+="+";
    _txtDisplay.value="";
    if(n2==0)
    {
        n2=n1;
    }
    else
    {
        n2=ris;
    }
    aus="";
}

function sottrazione() {
    op = "sottrazione";
    _txtDisplay.value+="-";
    _txtDisplay.value="";
    if(n2==0)
    {
        n2=n1;
    }
    else
    {
        n2=ris;
    }
    aus="";
}

function moltiplicazione() {
    op = "moltiplicazione";
    _txtDisplay.value+="*";
    _txtDisplay.value="";
    if(n2==0)
    {
        n2=n1;
    }
    else
    {
        n2=ris;
    }
    aus="";
}

function divisione() {
    op = "divisione";
    _txtDisplay.value+="/";
    _txtDisplay.value="";
    if(n2==0)
    {
        n2=n1;
    }
    else
    {
        n2=ris;
    }
    aus="";
}

function calcola() {
    _txtDisplay.value = "";
    if (op == "somma") {
        ris = parseFloat(n2 + n1);
    } else if (op == "sottrazione") {
        ris = parseFloat(n2 - n1);
    } else if (op == "moltiplicazione") {
        ris = parseFloat(n2 * n1);
    } else if (op == "divisione") {
        ris = parseFloat(n2 / n1);
    }
    _txtDisplay.value=ris;
}

function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}