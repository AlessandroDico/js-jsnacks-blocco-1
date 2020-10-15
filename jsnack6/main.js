// Stampa le potenze di 2 senza superare il numero 1000

// IL RISULTATO DELLA POTENZA NON DEVE SUPERARE 1000

var array = [0];
var result = 0;

for (var i = 0; i < array.length && result < 960; i++) {
    result = [i] * [i];
    array.push(result);
    console.log(result);
}
