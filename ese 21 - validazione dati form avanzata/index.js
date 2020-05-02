"use strict";

let _nominativo;
let _cap;
let _lavoratore;
let _descr;
let _sesso;
let _ateneo;
let i;

window.onload = function(){
    _nominativo = document.getElementById("nominativo");
    _cap = document.getElementsByName("cap")[0];
    _lavoratore = document.getElementsByName("lavoratore")[0];
    _descr = document.getElementsByName("descr")[0];
    _sesso = document.getElementsByName("sesso");
    _ateneo = document.getElementsByName("ateneo")[0];
}

function validaNominativo(){
    let nome = _nominativo.value;
    i = 0;

    while(i < nome.length && isNaN(nome[i]) || nome[i]==" ")    //controllo se ci sono dei numeri
        i++;

    if (!isNaN(nome[i]))    //ci sono
    {
        _nominativo.classList.add("red-border");
        alert("Il nominativo non deve contenere numeri");
        _nominativo.value = "";
        return false;
    }
    else    //non ci sono
    {
        _nominativo.classList.remove("red-border");
        return true;
    }
}

function validaCAP() {
    let cap = _cap.value;
    i=0;

    if (cap.length < 5) //controllo se è composto da 5 numeri
    {
        _cap.classList.add("red-border");
        _cap.value = "";
        alert("Il CAP deve essere composto da 5 numeri");
        return false;
    }
    else
    {
        while (i < cap.length -1 && !isNaN(cap[i]))
            i++;

        if (isNaN(cap[i]))  //controllo se ci sono delle lettere
        {
            _cap.classList.add("red-border");
            _cap.value = "";
            alert("Il CAP deve essere composto esclusivamente da numeri");
            return false;
        }
    }

    _cap.classList.remove("red-border");
    return true;
}

function abilitaCasella() {
    //controllo se la casella è selezionata
    _lavoratore.checked ? _descr.disabled = false : _descr.disabled = true;
}

function validaForm() {
    //controllo il modulo prima di inviarlo
    let output = "Il modulo non può essere inviato perché:\n";

    //NOMINATIVO
    let nome = _nominativo.value;
    i = 0;

    while (i < nome.length - 1 && !isNaN(nome[i]))
        i++;

    if(!isNaN(nome[i])) //se contiene o se è un numero
        output += "Il nome non può essere o contenere numeri\n";

    if (nome == "") //se è vuoto
        output += "Il nome non può essere vuoto\n";

    //RADIO BUTTON
    let ok = false;
    i = 0;

    while(i!=2 && !ok)  //se uno dei due è selezionato
    {
        if (_sesso[i].checked)
            ok = true;
        i++;
    }
    if (!ok)
        output += "Uno dei due sessi deve essere selezionato\n";

    //ATENEO
    if (_ateneo.value == "nessuno")
        output += "Deve essere selezionato un ateneo\n";

    //CAP
    if (_cap.value == "")
        output += "Il CAP non può essere vuoto\n";

    //CONTROLLO DESCRIZIONE LAVORO
    if (!_descr.disabled)   //guardo se il campo è abilitato
    {
        if (_descr.value == "") //se non c'è scritto niente all'interno lo aggiungo alle cose errate
            output += "Bisogna inserire una descrizione del lavoro svolto\n";
    }

    //FINE VALIDAZIONE
    if (output != "Il modulo non può essere inviato perché:\n")
    {
        alert(output);
        return false;
    }
    else
    {
        alert("Modulo inviato correttamente!");
        return true;
    }
}

function resetta() {
    _nominativo.value = "";
    for (i = 0;i < 2;i++)
        _sesso[i].checked = false;
    _cap.value = "";
    _ateneo.value = "nessuno";
    _lavoratore.checked = false;
    _descr.disabled = true;
    _descr.value = false;
}

function addClass(_element, _classNameToAdd) {
    let arr = _element.className.split(" ");
    if (arr.indexOf(_classNameToAdd) == -1)
    {
        _element.className += " " + _classNameToAdd;
    }
}

function removeClass(_element, _classNameToRemove) {
    _element.className = _element.className.replace(_classNameToRemove, "");
}