// Calcola la somma e la media dei numeri da 1 a 10.

// MI SERVE UNA VARIABILE SOMMA
var somma = 0;

var numbers = 10;
// CREO UN CICLO IF CHE MI SOMMA AD OGNI 'GIRO' IL NUMERO ATTUALE CON LA SOMMA PRECEDENTE

for (var i = 1; i <= numbers; i++) {
    // console.log(i);
    somma = somma + i;
    // console.log(somma);
}

// LA SOMMA è
console.log(somma);
// LA MEDIA è LA SOMMA DIVISO I NUMERI DI CICLI
console.log(somma / numbers);
