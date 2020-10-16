// Stampa le potenze di 2 senza superare il numero 1000

// IL RISULTATO DELLA POTENZA NON DEVE SUPERARE 1000



var risultato;

for (var i = 0; Math.pow(2, (2 + i)) < 1000; i++) {
    risultato = Math.pow(2, (2 + i));
    console.log(risultato);
}
