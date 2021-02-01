let array = [1, 2, 3];

console.log(array);


//varios metodos de los array 

let personas = ['chris', 'nico', 'nicola', 'jacopo', 'gracia', 'mar'];

console.log(personas.length); //.length toma el ultimo elemento no como indice en este caso 6


// simplemente array.pop() modifica la estructura del array personas quidado!! uso Array.from para crear una copia del mismo array (funcional programming meaning 😇)

console.log(Array.from(personas).pop()); // mar
console.log(personas); // [ 'chris', 'nico', 'nicola', 'jacopo', 'gracia', 'mar' ]

console.log(personas.push('fernando'));
console.log(personas);

console.log(personas.shift()); // chirs
console.log(personas);

console.log(personas.includes('gracia')); //true
console.log(personas.includes('chirs')); //false


let num = [100, 2, 20, 35, 4, 44]

// functional programming
 // console.log(num.sort()); // [ 100, 2, 20, 35, 4, 44 ]
  .sort((a, b) => a - b)
  .filter( num => num > 30 );

console.log(num);


// imperativ programming
let a = [];
for (let i = 0; i < num.length; i++) {
  if ( num[i] > 30 ) {
    a.push(num[i]);
  }
}

console.log(a);

