/*
Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.
*/


// CHIEDO NUMERO ALL'UTENTE

var user_number = parseInt(prompt('scrivi fino a che numero desideri elevare al cubo'));
// console.log(user_number);


// CREO UN CICLO DI FOR PER PRENDERE IL RANGE DA 0 A USER_NUMBER

for (var i = 0; i <= user_number; i++) {
    // console.log(user_number);
    var add = (i) * (i) * (i);
    console.log(add);
}
