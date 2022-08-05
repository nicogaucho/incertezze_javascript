// CURIOSITA SUI NUMBER 
console.log(Number.MAX_SAFE_INTEGER); // massimo per lavorare con js poi usa i bigInt

console.log(Number.isNaN(NaN));  // controlla se un valore é effittivamente NaN

console.log(Number.isFinite(Infinity)); // controlla se numero é finito

console.log(Number.isInteger(12.43)) // controlla se numero é intero

(42).toString(2) // rappresentazione a stringa del numero nella base fornita come paramentro
(42).toString(36) 

(12.345).toFixed(2) // ritorna stringa con possibilita di aggistamento del valore decimale 

console.log(0.1 + 0.2 == 0.3);  // false perche é uguale a 0.300000000004 
// IEEE 754 per rappresentare i numeri con la , poi approssima

console.log(10/ 'ciao'); // NaN che é un tipo number, lo giudica come una classificazione numerica

// mira lo que acabo de descubrir 🤯 jugando con lo decimales usando parseInt() para convertir cadenas en numeros... 🤓 

console.log(parseInt('0.5')) == 0 // devuelve 0

// parseInt acepta una cadena como paramentro una cadena para convertirla y devolver el primer num entero que encuentra 

console.log(parseInt('0.005')) == 0

// devueve siempre 0, bueno no ha cambiado mucho 🤪

console.log(parseInt('0.00000000000005')) == 0

// que pasa si le paso un numenro como parametro¿?

console.log(parseInt(0.00000000000005)) == 5

// porque String(0.00000000000005) == '5e-7'

// devuelve 5 y no 0 🤯



