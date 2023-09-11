function playGame() {
    const gameName = 'codingName';
    const players = 22;
    const rules = ['master', 'submaster', 'laburer', 'handworker'];
    console.log(gameName);
    console.log(players);


    // if we use blocks inside the function they can access to these variable 
    if (true) {
        console.log(players);
    }

    for (let i = 0; i < rules.length; i++) {
        console.log(rules[i]);
    }

} 

// can't access variables declared inside a function from outside 
// console.log(gameName); // gameName is not defined

// Come allora posso fare per accedere alle variabili interne alla funzione? 

// risposta: siamo vicini al concetto di closure, dovró ritornare un valore che possa mostrarmi le varibili inizializzate internamente alla funzione

function playGame() {
    const gameName = 'codingName';
    const players = 22;
    const rules = ['master', 'submaster', 'laburer', 'handworker'];

    return {
        getName() {
            console.log(gameName);
        }, 
        getRules() {
            for (let i = 0; i < rules.length; i++) {
                console.log(rules[i])
            }
        },       
        addRule(role) {
            rules.push(role);
            console.log(rules);
        }
    }
}

// memorizzo l'oggetto che mi restituisce la funzione in una variabile
const game = playGame();
// posso usare l'oggetto memorizzato per richiamare i suoi metodi 
game.getName();
game.getRules();
game.addRule('apprentice');

