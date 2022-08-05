// ejercicio 01 
// Definir una función que acepte una entrada y devuelva otra función que muestre por consola la entrada pasada a la primera función 

function createPrinter(entrada) {
    return function print() {
        console.log(entrada);
    };
};

// primera aplicación 
const printClosure = createPrinter("Hola closure 🤟🏻");
printClosure();

// segunda aplicación 
const printMundo = createPrinter("Hola mundo 🌏");
printMundo();