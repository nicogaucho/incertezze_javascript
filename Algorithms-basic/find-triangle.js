// determina se é un triangolo 
// ogni lato deve essere inferiore della somma degli atri 2 

// a < b + c
// b < a + c 
// c < a + b
 
let latoA = parseInt(prompt("inserisci lato: "));
let latoB = parseInt(prompt("inserisci lato: "));
let latoC = parseInt(prompt("inserisci lato: "));

if ( latoA < latoB + latoC && latoB < latoA + latoC && latoC < latoA + latoB) {
    alert('SEI UN TRINAGOLO 🤓')
} else {
    alert('NON SEI UN TRIANGOLO 😢')
}

