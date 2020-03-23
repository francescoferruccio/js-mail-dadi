// Gioco dei dadi, chi fa di più vince.
var dado1, dado2, vincitore;

// lancio dado 1
dado1 = Math.floor((Math.random() * 6) + 1);

console.log("dado1 = " + dado1);

// lacio dado 2
dado2 = Math.floor((Math.random() * 6) + 1);

console.log("dado2 = " + dado2);

// confronto i due valori e decido il vincitore (se c'è)
if (dado1 > dado2) {
  vincitore = "Vince il giocatore 1.";
} else if (dado1 < dado2) {
  vincitore = "Vince il giocatore 2.";
} else {
  vincitore = "Finisce pari."
}

// output
document.getElementById('num1').innerHTML = dado1;
document.getElementById('num2').innerHTML = dado2;
document.getElementById('winner').innerHTML = vincitore;
