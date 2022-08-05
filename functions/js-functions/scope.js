// SCOPE
// Donde y cuando las variables son acesibles

// nivels de Scope 
// 1. global scope
    // window object in the browser
    // ejemplo of console.log(global)
    // si tienes la variable dentro del global scope es acesible en todo lados
// 2. file scope / module scope 
    // acesible al fichero en cual declaramos la variable 
// 3. function scope


// full access porque name está declarada en el scope global
const name = "Nick";

function sayHello() {
    console.log(name);
    if (true) {
        return name;
    }
}

console.log(sayHello())




// const y let son blocked scoped
// BLOCK scope significa todo que haya dentro de parentesis {}, if statement, for, while loops, functions etc...

// function doThing() {
//     if(true) {
//         let thing = 42;
//         thing += 10;
//     }
//     console.log(thing) // thing is not defined, let es block scoped, el console.log no puede leer hacia dentro del bloque if 
// }

// doThing()