### Esercizio 31 - Cornice
Data una matrice di 10 x 10 quadratini, in cui ogni quadratino è realizzato mediante
un tag DIV appeso ad un wrapper ed implementa la seguente classe cella:
.cella{

width:40px;
height:40px;
margin:2px;
padding:0;
background-color: #CCC;
display:inline-block;

}
#wrapper{

width:440px;
height:440px;
margin:15px auto;

}
realizzare l’applicazione in cui la cornice, partendo dai bordi esterni,
si restringe di un livello ogni 1/2 sec.
Arrivata al livello 5 (con i quattro quadratini centrali ricolorati di rosso) dopo ½
secondo l’animazione ricomincia dal livello più esterno.
Al cambio di livello, per il resettare le celle rosse e riportarle a grigie, utilizzare una
procedura reset() che riazzeri l’intera matrice.