// ejercicio 03
// Definir una función createAdder. Esta functión acepta como paramentro un numero (x) y devuelve otra función. La función que devuelva acepta otro valor como paramentro (y) y devuelve la suma entre (x + y). 

function createAdder(x) {
    return function add(y) {
        return x + y;
    }
}

const addByTwo = createAdder(2)
console.log(addByTwo(3)); // 5