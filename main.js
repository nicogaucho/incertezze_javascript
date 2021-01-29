// ejemplos di console.log()

// console.log(document);
// console.log(window.location.hostname);

/* 
var variable = 45;
console.log(variable); 
*/

/* 
let string = 'saludos';
console.log(string);
 */

/* 
const stringInterpulations = `saludos 45`;
console.log(stringInterpulations);
*/

/* 
variable values substitution 
let a = 10;
console.log(a);

a = 15;
console.log(a); 
*/

//variable declaration 
//let num;

//variable assignation 
//num = 10;

//variable declaration and initialization 
//let numero = 10;

//console.log(num);
//console.log(numero);
 


/* 
ejemplo de tipos de datos primitivos

let string = 'go js';
console.log(typeof string);

let numero = 10;
console.log(typeof numero);

let boolean = true;
console.log(typeof boolean);

let undefinedVariable 
console.log(typeof undefinedVariable);

let sym1 = Symbol();
console.log(typeof sym1);
*/

//¿null es un primitive type o referece?
//https://262.ecma-international.org/10.0/#sec-typeof-operator



/* 
reference type ejemplos 

console.log(typeof {});

console.log(typeof {
  name: 'nicolas'
});

console.log(typeof [12, 10, 9, 5]);

console.log(typeof {
  0: 12
});
 */



/* 
ejemplo de string interpolation

let a = 'luis';
let b = 'Adrian';

let c = `Hola ${a}, ¿quieres conocer a ${b}?`;
console.log(c); 
 */

//add numeber to string... 

//console.log(2 + 2); //it's fine 

//console.log(2 + '2'); //it's still fine but it's a string now...type coercion is happening 

//console.log(true + true); //it's basically 1 + 1 that's awesome!!

//console.log('2' + '2' - '2'); //  it's 20 unbelievible it's converting strings in numbers 

//Type coercion implicit 

/* 
let a = '10';
let b = 10;

let c = a + b;
console.log(typeof c); */

//Type coercion explicit

/* 
let d = '10';
let e = 10;

let f = Number(a) + b;

console.log(typeof f);
 */



/*
valores booleanos
el resultado de la primera operacion devuelve un valor booleano: true = 1, false = 0;

console.log(1 < 2 < 3); 

console.log(3 > 2 > 1); 
*/


//condiciones 

/* 
let res = 0;

if( res == 0 ){
  console.log('correct!');
} else {
  console.log('wrong!');
}
 */

//concadena condiciones 
/* 
const age = 25;
const auto = true;

if( age >= 18 && auto ){
  console.log('you can drive!');
} else {
  console.log('you cannot drive!');
}
*/

//ternar operator 
/* 
const age = 25;
const auto = true;

condition ? instruction : other instruction

age > 18 && auto ? console.log('you can drive') : console.log('you cannot drive!');

*/

 
