// Stampa le potenze di 2 senza superare il numero 1000

// IL RISULTATO DELLA POTENZA NON DEVE SUPERARE 1000



var risultato;

for (var i = 1; Math.pow(2, i) < 1000; i++) {
    risultato = Math.pow(2, i);
    console.log(risultato);
}

// SOLUZIONE CON IL WHILE

var base = 2;
var limite = 1000;
var potenza = 1;
var esponente = 1

while (potenza < limite) {
    console.log(potenza);
    potenza = Math.pow(base, esponente);
    esponente++;
}
