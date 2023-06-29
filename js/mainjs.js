const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favouriteColour = prompt('Inserisci il tuo colore preferito');

let password = firstName + lastName + favouriteColour + parseInt('21');

console.log(password);