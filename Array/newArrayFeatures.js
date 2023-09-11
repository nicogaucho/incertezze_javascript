const values1 = [1, 2, 3, 4, 5]; 
// reverse() modifica l'array di partenza...
values1.reverse();
console.log(values1); // [ 5, 4, 3, 2, 1 ]

const values2 = [1, 2, 3, 4, 5]; 
// toReversed() copia l'array prima di inverire l'ordine degli items nell'array...
values2.toReversed();
console.log(values2); // [ 5, 4, 3, 2, 1 ]

