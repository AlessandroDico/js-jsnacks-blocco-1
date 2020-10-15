// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga

var parola1 = prompt('inserisci la prima parola');
console.log(parola1);

var parola2 = prompt('inserisci la seconda parola');
console.log(parola2);

// calcolo lunghezza delle stringhe

var lunghezza1 = parola1.length;
var lunghezza2 = parola2.length;

console.log('la lunghezza di parola 1 è ' + lunghezza1);
console.log('la lunghezza di parola 2 è ' + lunghezza2);

// stampo prima la parola più corta poi quelle più lunga

if (lunghezza1 > lunghezza2) {
    console.log(parola2);
    console.log(parola1);
} else if (lunghezza2 > lunghezza1) {
    console.log(parola1);
    console.log(parola2);
} else {
    console.log('le parole sono lunghe uguali');
}
