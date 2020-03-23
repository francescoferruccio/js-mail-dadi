// // Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// creo un array mio con le mail autorizzate
var mail = ["pinko.pallino@mail.com", "aldobaglio@mail.com", "pdor.kmer@mail.it", "bool.ean@mail.it", "hofinitoleidee@mail.com"];

console.log(mail);

// creo una variabile per "ricordarmi" se la mail è stata trovata
var found = false;

// chiedo all'utente di inserire la sua Mail e la memorizzo
var userMail = prompt("Inserisci il tuo indirizzo email");

console.log("mail inserita: " + userMail);

// controllo se la mail inserita dall'utente è presente nel mio array
for (var i = 0; i < mail.length; i++) {
  if (mail[i] == userMail) {
    found = true;
  }
}

//restituisco un output in pagina in base al risultato della ricerca nell'array
if (found == true) {
  msg = "Benvenuto, sei autorizzato ad accedere alla pagina.";
} else {
  msg = "La tua email non è presente nel nostro database, ci dispiace.";
}

document.getElementById('output').innerHTML = msg;


// VERSIONE ALTERNATIVA

// // creo un array mio con le mail autorizzate
// var mail = ["pinko.pallino@mail.com", "aldobaglio@mail.com", "pdor.kmer@mail.it", "bool.ean@mail.it", "hofinitoleidee@mail.com"];
//
// console.log(mail);
// // creo un messagio di default per il caso in cui la mail non sia presente nell'array
// var msg = "La tua email non è presente nel nostro database, ci dispiace.";
//
// // chiedo all'utente di inserire la sua Mail e la memorizzo
// var userMail = prompt("Inserisci il tuo indirizzo email");
//
// console.log("mail inserita: " + userMail);
//
// // controllo se la mail inserita dall'utente è presente nel mio array
// for (var i = 0; i < mail.length; i++) {
//   if (mail[i] == userMail) {
//     msg = "Benvenuto, sei autorizzato ad accedere alla pagina.";
//   }
// }
//
// // restituisco l'output in pagina
// document.getElementById('output').innerHTML = msg;
