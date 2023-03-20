// Per la nostra sala da bowling, abbiamo bisogno di un sistema che tenga traccia dei giocatori e dei punteggi per partita dei giocatori, in modo da determinare una classifica e un eventuale vincitore di giornata. Il compito del candidato sará implementare una struttura dati adeguata e implentare le funzionalità richeste: 
// - Possibilità di aggiungere giocatori in piattaforma DONE ✅
// - creare 10 punteggi casuali per ogni giocatore DONE ✅
// - trovare il punteggio totale per ogni giocatore DONE ✅
// - impostare una classifica giocatori basandosi sulla media punti di ognuno di essi per determinare il vincitore DONE ✅

let bowling = {
    players: [],
    // aggiunta giocatori
    addPlayer(name) {
        return this.players.push({nome : name})
    },
    // creare 10 punteggi casuali 
    getScores() {
        return this.players.forEach(player => {
            player.scores = getRandomScore()
        })
    }, 
    // inserisci media in ogni player 
    getAveragePlayer() {
        return this.players.forEach(player => {
            player.avarage = Number(player.scores.reduce((t,s) => {
                t += s / 10;
                return t;
            }, 0).toFixed(2));
        })
    },
    // determina il vincitore 
    getWinner() {
        return this.players.sort((a,b) => b.avarage - a.avarage)[0].nome
    }
};


const getRandomScore = () => {
    const storeScores = [];
    for (let i = 0; i <= 10; i++) {
        let score = Math.round(Math.random() * 10);
        storeScores.push(score);
    }
    return storeScores;
}


bowling.addPlayer('Nico');
bowling.getScores()
bowling.getAveragePlayer()
console.log(bowling, "The winner is: ",  bowling.getWinner())






