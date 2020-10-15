// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numero1 = parseFloat(prompt('inserisci un numero'));
console.log(numero1);

var numero2 = parseFloat(prompt('inserisci un secondo numero'));
console.log(numero2);

if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
        console.log('il numero maggiore è ' + numero1);
    } else if (numero2 > numero1) {
        console.log('il numero maggiore è ' + numero2);
    } else {
        console.log('i numeri sono pari');
    }
} else {
    alert('inserisci numeri');
}
