// The world championship of rock paper scissors uses the best of three of three format (best of three games = one set, best of three sets = match).

// Given a sequence S of game results (1 = player 1 won, 2 = player 2 won, 0 = draw), determine who won the match.


// Example:
// Given the sequence 2 2 1 0 0 2 2, we get these sets:
// Set 1: 2 2 => Player #2 won
// Set 2: 1 0 0 2 2 => Player #2 won
// Result: © won two sets and therefore won the match!

// Note: A set cannot end in a draw. A set ends whenever a player has won two games.

function getWinner(seq) {
  
  const table = seq.reduce((acc, v) => {
    acc[v] ? acc[v]++ : acc[v] = 1;
    return acc
  }, {})
  
  const winner = Object.entries(table).sort((a, b) => b[1] - a[1]).filter(el => !el[0].includes(0))[0][0]
  
  return `Player #${winner} won`
}


console.log(getWinner([2, 2]));
console.log(getWinner([1, 0, 0, 2, 2]));
console.log(getWinner([1, 1, 1, 2, 2]));
console.log(getWinner([1, 0, 0, 0, 0]));
