
let res = 0;

if( res == 0 ){
  console.log('correct!');
} else {
  console.log('wrong!');
} 


//concadena condiciones 

const age = 25;
const auto = true;

if( age >= 18 && auto ){
  console.log('you can drive!');
} else {
  console.log('you cannot drive!');
}




//ternar operator 

/* const age = 25;
const auto = true;  */

// condition ? instruction : other instruction

age > 18 && auto ? console.log('you can drive') : console.log('you cannot drive!'); 



// escribir un programa que pida un número al usuario y se vuelve "OK" si el número es múltiplo de 21, vuelve "casi - múltiplo de 7" si el número es múltiplo de 7, vuelve "NO - múltiplo de 3" si el número es múltiplo de 3, de lo contrario "HOLA"

let num = prompt("colocar un número:")
if (num % 21 == 0) {
  alert("OK")
} else if (num % 7 == 0) {
  alert("casi - múltiplo de 7")
} else if (num % 3 == 0) {
  alert("NO - múltiplo de 3")
} else {
  alert("HOLA")
} 





/*
1 step 
let insertNum = prompt('insetisci un num: ');
if (typeof insertNum == "number") {
  console.log( `il numero inserito é ${insertNum}`);
} else {
  console.log('non hai inserito un num');
} */

/*
2 step che transforma cmq num ma se inserisco cadena 
let insertNum = Number(prompt('insetisci un num: '));
if (typeof insertNum == "number") {
  console.log( `il numero inserito é ${insertNum}`);
} else {
  console.log('non hai inserito un num');
} */

/* 
3 step 
anche se inserisci stringa da come risultato NaN che va nei numeri e ti ritorna il primo console

let insertNum = Number(prompt('insetisci un num: '));
if (typeof insertNum == "number" && !Number.isNaN(insertNum)) {
  console.log( `il numero inserito é ${insertNum}`);
} else {
  console.log('non hai inserito un num');
} 
*/


