function gioca() {
  // Generiamo un numero casuale da 1 a 6 per il giocatore e per il computer
  let scoreGamer = Math.floor(Math.random() * 6) + 1;
  let scoreBot = Math.floor(Math.random() * 6) + 1;

  // Stabiliamo il vincitore
  let winner;
  if (scoreGamer > scoreBot) {
      winner = "Giocatore";
  } else if (scoreBot > scoreGamer) {
      winner = "Computer";
  } else {
      winner = "Nessun vincitore, pareggio";
  }

  // Stampiamo il risultato
  let resultGamerTitle = document.getElementById("resultGamerTitle");
  resultGamerTitle.innerText = "Il giocatore ha ottenuto un punteggio di ";

  let resultGamer = document.getElementById("resultGamer");
  resultGamer.innerText = scoreGamer;
  

  let resultTitle = document.getElementById("resultTitle");
  resultTitle.innerText = "Il vincitore è: ";

  let result = document.getElementById("result");
  result.innerText = winner;

  let resultBotTitle = document.getElementById("resultBotTitle");
  resultBotTitle.innerText = "Il computer ha ottenuto un punteggio di";

  let resultBot = document.getElementById("resultBot");
  resultBot.innerText = scoreGamer;

}