
// primitive type are passed by value 
// primitive type are immutable! cannot be changed

function add(a, b) {
  a = a * 2;
  return a + b;
}

let firstNumber = 10;
console.log(firstNumber);                     //10
console.log(add(firstNumber, firstNumber));   //30
console.log(firstNumber);                     //10


//Reference type.. are passed by reference they can be changed

function hello(person) {
  person.name = 'gracia';
  return `hello ${person.name}`;
}

let persona = {
  name: 'nico'
};

console.log(persona);                 //{name: 'nico'}
console.log(hello(persona));          //hello gracia
console.log(persona);                 //{name: 'nico'}




