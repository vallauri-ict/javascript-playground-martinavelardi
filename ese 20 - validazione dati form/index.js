"use strict";

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;

window.onload = function(){
    _cognome = document.getElementsByName("cognome")[0];
    _nome = document.getElementById("nome");
    // [TODO: mettere anche gli altri riferimenti]
}

function validaForm(){
    if(_cognome.value == "")
    {
        _cognome.classList.add("red-border");
        return false;
    }
    else
    {
        _cognome.classList.remove("red-border");
    }
    if (document.datiUtente.nome.value == ""){
        alert("Inserire il nome!");
        return false;
    }
    if (document.datiUtente.matricola.value == "")
    {
        alert("Inserire matricola!");
        return false;
    }
    let v = parseInt(document.datiUtente.matricola.value);
    if (isNaN(v))
    {
        alert("La matricola deve essere un numero");
        return false;
    }
    if (document.datiUtente.regione.value == "nessuna")
    {
        alert("Selezionare una regione");
        return false;
    }
    if (document.datiUtente.email.value == "" && document.datiUtente.tel.value == "")
    {
        alert("Inserire l'email o il numero di telefono");
        return false;
    }
    alert("Dati inseriti correttamente");
    return true;
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