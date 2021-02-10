
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

console.log(1 < 2 < 3);  // true

console.log(3 > 2 > 1);  // false
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

 


/*  logical operators improvement  */

//si a es truty return a, si a es falsy return b 
if ( !a ) {
  a = b;
} 

//mismo resultado 
a ||= b;


// or 
// si a es truty return b, si a es falsy return a 
if (a) {
  a = b; 
} 

// mismo resultado

a &&= b;

