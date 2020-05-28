"use strict"

const DIM = 10;
let livello = 0;

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");

    for (let i=0; i<DIM; i++)
    {
        for (let j=0; j<DIM; j++)
        {
           let _div = document.createElement("div");
           _div.id = "btn-" + i + "-" + j;
           _wrapper.appendChild(_div);
        }
    }
    setInterval(visualizza, 500);

    function visualizza() {
        reset();
        disegnaCornice();
        livello++;
        if (livello == 5)
            livello = 0;
    }
    function reset() {
        for (let i=0; i<DIM; i++)
        {
            for (let j=0; j<DIM; j++)
            {
                let _btn = document.getElementById("btn-" + i + "-" + j);
                _btn.style.backgroundColor = "#CCC";
            }
        }
    }
    function disegnaCornice() {
        let riga1 = livello;
        let riga2 = DIM - livello - 1;
        let colonna1 = livello;
        let colonna2 = DIM - livello - 1;

        // Disegno le righe
        for (let j=livello; j<DIM-livello; j++)
        {
            let _btn1 = document.getElementById("btn-" + riga1 + "-" + j);
            _btn1.style.backgroundColor = "#F00";
            let _btn2 = document.getElementById("btn-" + riga2 + "-" + j);
            _btn2.style.backgroundColor = "#F00";
        }

        // Disegno le colonne
        for (let i=livello; i<DIM-livello; i++)
        {
            let _btn1 = document.getElementById("btn-" + i + "-" + colonna1);
            _btn1.style.backgroundColor = "#F00";
            let _btn2 = document.getElementById("btn-" + i + "-" + colonna2);
            _btn2.style.backgroundColor = "#F00";
        }
    }
}