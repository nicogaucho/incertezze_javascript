// ejercicio 02 
// Definir una función que devuelva una nueva función que incremente una variable cada vez que invoquemos esta misma función 

function createCounter() {
    let count = 0;
    return function countIncrease() {
        count += 1;
        return count;
    };
};


const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
