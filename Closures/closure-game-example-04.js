function createGame() {
    let gameName = 'codingGame';
    let players = ['A', 'B', 'C', 'D'];
    // console.log(gameName);
    // console.log(players);

    return {
        getName() {
            return gameName;
        }, 
        getPlayers() {
            return players;
        }, 
        newPlayer(name) {
            players.push(name);
            return players;
        }
    };
}

const game = createGame();

console.log(game.newPlayer('F'));
