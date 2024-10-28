// dati da inserire dall utente (kilometri e eta)
const chilometri = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
const eta = parseInt(prompt("Inserisci l'età del passeggero:"));

//definire prezzo per km
const prezzoKm = 0.21;

// calcolo della tariffa base
let prezzoTotale = chilometri * prezzoKm;

// Applica gli sconti in base all'età
if (eta < 18) {
    // Sconto del 20% per i minorenni
    prezzoTotale *= 0.8;
} else if (eta > 65) {
    // Sconto del 40% per gli over 65
    prezzoTotale *= 0.6;
}

// formattazzione per numero con 2 decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Stampa il prezzo
console.log(`Il prezzo totale del viaggio Risulta: €${prezzoTotale}`);