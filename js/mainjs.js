const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColour = prompt('Inserisci il tuo colore preferito');
const age = prompt('Inserisci la tua età');

let password = firstName + lastName + favouriteColour + (parseInt(age) + 21);

document.getElementById('pass-generated').innerHTML = `la tua password è: ${password}`;