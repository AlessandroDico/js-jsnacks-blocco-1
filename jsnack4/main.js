/*
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
un numero, se è dispari inseriscilo nell’array.
*/

// FACCIO UN ARRAY VUOTO
var array = [];

// CHIEDO SEI VOLTE UN NUMERO

for (var i = 0; i < 6; i++) {
    var user_number = parseInt(prompt('scrivi un numero'));
    // PER CAPIRE SE è DISPARI USO IL MODULO E SE IL RESTO è DIVERSO DA ZERO SARà DISPARI E LO POSSO PUSHARE NELL'ARRAY
    if (!isNaN(user_number)) {
        var rest = (user_number % 2);
        if (rest != 0 ){
            array.push(user_number);
            console.log(user_number);
        }
    } else {
        alert('elemento non valido');
    }
}
