// Hoisting es un mecanismo de JavaScript donde las variables y las declaraciones de función se mueven a la parte superior de su scope antes de la ejecución del código

// Inevitablemente, esto significa que no importa dónde se declaren las funciones y variables, se mueven a la parte superior de su scope, independientemente de si su scope es global o local

// IMPORTANTE

// El mecanismo de elevación sólo mueve la declaración y no la asignación.

// HOISTING VAR  --- var is hoisted

console.log(ejemplo); // undefinded  

var ejemplo = 'HOISTING EJEMPLO';    

console.log(ejemplo); // HOISTING EJEMPLO

// HOSTING LET  

//console.log(example); // Cannot access 'example' before initialization

let example = "hoisting example";

// porque no es undefinded ¿? 

//let example; 

//console.log(example); // undefinded

//example = "hoisting example";

//console.log(example); // hoisting example


// Hoisting in Function Declaration
//Una declaración de función se eleva completamente a la parte superior. Ahora, podemos entender por qué Javascript nos permite invocar una función antes de declararla.

console.log(funcion); // [Function: funcion]

funcion(); // esta es una function declaration

function funcion() {
  console.log('esta es una function declaration'); 
};


//Hoisting in Function Expression
//Function expressions no son hoisted.

console.log(eje); // 

eje(); // TypeError: eje is not a function

var eje = function() {
  console.log("This is example function output")
};
    

