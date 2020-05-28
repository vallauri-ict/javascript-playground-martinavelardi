"use strict"

window.onload = function(){
    let _img = document.getElementById("imgCarta");
    let _btnGioca = document.getElementById("btnGioca");
    let _lblSomma = document.getElementById("lblSomma");
    let _lblCarte = document.getElementById("lblCarte");
    let _lblRisultato = document.getElementById("lblRisultato");

    _btnGioca.addEventListener("click", gioca);
    _lblRisultato.style.visibility = "hidden";
    // setInterval(gioca, 1500); --> non servirebbe il pulsante
    let vet = [];   //Dichiarazione vettore più veloce

    function gioca() {
        if (_btnGioca.disabled == false)
        {
            _btnGioca.disabled = true;
            _lblSomma.innerHTML = "0";
            _lblCarte.innerHTML = "0";
            _lblRisultato.style.visibility = "hidden";
            vet = [];   //Riassegna vet a un nuovo vettore vuoto
            /*for (let i=0; i<vet.length; i++)  sbagliato perché accorcia la lunghezza
                vet.splice(0,1);
              for( let i=vet.length-1; i>=0; i--)
                vet.splice(0,1);*/
        }
        let rnd;
        do {
            rnd = generaNumero(1,10);
        }while (vet.includes(rnd)); //Se il vettore include quel numero
        vet.push(rnd);  //Salvo il numero nel vettore
        _img.src = "img/bg_d" + rnd + ".gif";

        if (rnd > 7)
        {
            rnd = 0.5;
        }
        _lblCarte.innerHTML = vet.length;
        // _lblCarte.innerHTML = parseInt(_lblCarte.innerHTML) + 1;
        _lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + rnd;

        if (vet.length < 3)
            setTimeout(gioca, 1500);
        else
        {
            if (parseFloat(_lblSomma.innerHTML) > 7.5)
                _lblRisultato.innerHTML = "Hai perso!";
            else
                _lblRisultato.innerHTML = "Hai vinto!";
            _lblRisultato.style.visibility = "visible";
            _btnGioca.disabled = false;
        }
    }
}

//Funzioni generiche
function generaNumero(min,max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}