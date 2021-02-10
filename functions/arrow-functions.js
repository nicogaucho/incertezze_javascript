/* const greet = () => {
  return 'hello world!';
} */

// se puede usar el single statement 

const greet = () => 'hello world!';

console.log(typeof greet == "function", true);
console.log(greet(), "hello world!");


// arrow function with return implicit

calculateVat = (price, vat) => price + ((price * vat) / 100);

console.log(calculateVat(100, 10)); 