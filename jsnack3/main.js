
/*
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti.
*/

// CHIEDO ALL'UTENTE DI IMMETTERE 5 VOLTE UN numero

// FACCIO LA SOMMA DI TUTTI I NUMERI INSERITI

var numero_utente = [];

var sum = 0;

for (var i = 0; i < 5; i++) {
    numero_utente.push(parseFloat(prompt('inserisci un numero')));
    console.log(numero_utente);
    sum = sum + numero_utente[i];
    console.log(sum);
}

document.writeln(sum);

















// ____
