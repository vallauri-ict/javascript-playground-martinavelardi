"use strict";

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;
let _tel;

window.onload = function(){
    _cognome = document.getElementsByName("cognome")[0];
    _nome = document.getElementById("nome");
    _matricola = document.getElementsByName("matricola")[0];
    _regione = document.getElementsByName("regione")[0];
    _email = document.getElementsByName("email")[0];
    _tel = document.getElementsByName("tel")[0];
    // [TODO: mettere anche gli altri riferimenti]
}

function validaForm(){
    //cognome
    if(_cognome.value == "")
    {
        _cognome.classList.add("red-border");
        alert("Inserire il cognome!");
        return false;
    }
    else
    {
        _cognome.classList.remove("red-border");
    }

    //nome
    if (_nome.value == ""){
        _nome.classList.add("red-border");
        alert("Inserire il nome!");
        return false;
    }
    else
    {
        _nome.classList.remove("red-border");
    }

    //matricola
    if (_matricola.value == "")
    {
        alert("Inserire matricola!");
        _matricola.classList.add("red-border");
        return false;
    }
    else
    {
        _matricola.classList.remove("red-border");
    }
    let v = parseInt(_matricola.value);
    if (isNaN(v))
    {
        alert("La matricola deve essere un numero");
        _matricola.classList.add("red-border");
        _matricola.value="";
        return false;
    }
    else
    {
        _matricola.classList.remove("red-border");
    }

    //regione
    if (_regione.value == "nessuna")
    {
        _regione.classList.add("red-select");
        alert("Selezionare una regione");
        return false;
    }
    else
    {
        _regione.classList.remove("red-select");
    }

    //email e tel
    if (_email.value == "" && _tel.value == "")
    {
        _email.classList.add("red-border");
        _tel.classList.add("red-border");
        alert("Inserire l'email o il numero di telefono");
        return false;
    }
    else
    {
        _email.classList.remove("red-border");
        _tel.classList.remove("red-border");
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
