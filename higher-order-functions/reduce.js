let numbers = [1, 2, 3, 4, 5];

// 2. Iteracion en el array
let sum = numbers.reduce((sum, number) => { // sum será el valor anterior del acumulador
  sum += number; // 3. actuliza el acumulador
  return sum; // 4.devuelve el acumulador
}, 0); // 1. Inicializacion del acumulador

console.log(sum);



