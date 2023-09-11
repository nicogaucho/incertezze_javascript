// Primitive type are passed by value 
// Primitive type are immutable! cannot be changed

function add(a, b) {
  a = a * 2;
  return a + b;
}

let firstNumber = 10;
console.log(firstNumber);                   // 10
console.log(add(firstNumber, firstNumber)); // 30   
console.log(firstNumber);                   // 10   


// Reference type.. are passed by reference they can be changed

function hello(person) {
  person.name = 'gracia';
  return `hello ${person.name}`;
}

let persona = {
  name: 'nico'
};

console.log(persona);                 // {name: 'nico'}
console.log(hello(persona));          // hello gracia
console.log(persona);                 // {name: 'gracia'}


// CLONE OBJECT 
// passed by reference example, to not pass reference only we need to clone the first obj and then on the obj cloned we can change internals values 

let animal = {
  name : "miky",
  lastname: "mouse", 
  age: 50 
}

let disney = cloneObj(animal)

function cloneObj(obj) {
  // JSON.stringify helps to convert obj to string and value got changed 
    // JSON.parse convert string into object 
  const clonedObj = JSON.parse(JSON.stringify(obj))
  return clonedObj;
}

disney.name = "pippo"

console.log(animal, disney);

// hahaha 
let a = Object.create(Array.prototype, {
  0: {writable: true, configurable: true, enumerable: true, value: 1}, 
  1: {writable: true, configurable: true, enumerable: true, value: 2},
  2: {writable: true, configurable: true, enumerable: true, value: 3},
});
console.log(a);
console.log(a instanceof Array)  // true
console.log(typeof a); 

let b = new Array(1,2,3);
console.log(b);
console.log(b instanceof Array); // true
console.log(typeof b);


console.log(Array.isArray(a));
console.log(Array.isArray(b)); 