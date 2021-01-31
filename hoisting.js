// Hoisting es un mecanismo de JavaScript donde las variables y las declaraciones de función se mueven a la parte superior de su scope antes de la ejecución del código

// Inevitablemente, esto significa que no importa dónde se declaren las funciones y variables, se mueven a la parte superior de su scope, independientemente de si su scope es global o local

// IMPORTANTE

// El mecanismo de elevación sólo mueve la declaración y no la asignación.


// HOISTING VAR 

console.log(ejemplo);

var ejemplo = 'HOISTING EJEMPLO'; // undefinded      

console.log(ejemplo); // HOISTING EJEMPLO

// HOSTING LET 


