
/*
Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti.
*/

// CHIEDO ALL'UTENTE DI IMMETTERE 5 VOLTE UN numero

// FACCIO LA SOMMA DI TUTTI I NUMERI INSERITI

var user_number = [];

var sum = 0;

for (var i = 0; i < 5; i++) {
    user_number.push(parseFloat(prompt('inserisci un numero')));
    console.log(user_number);
    sum = sum + user_number[i];
    console.log(sum);
}

document.writeln(sum);

// UNA SOLUZIONE PIù COMPATTA ANCORA
/*

var sum = 0;

for (var i = 0; i < 5; i++) {
    var user_number = parseFloat(prompt('inserisci un numero'));
    console.log(user_number);
    sum = sum + user_number;
}

console.log(sum);

*/











// ____
