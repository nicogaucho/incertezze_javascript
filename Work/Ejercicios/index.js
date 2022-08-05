/*  1.IF ELSE
- crear un programa que dada una variable num nos diga si es mayor que 100 
- crear un programa que dada una variable num nos diga si es positivo o negativo
- crear un programa que dadas 2 variables, num1 y num2, las sume y si la suma es mayor que 50 los multiplique  por 2, si no, por 3. 
*/

/* 
2.IF ELSE-IF
- crear un programa que dada una variable num nos diga si es un multiplo de 3, si no lo es, nos diga si es multiplo de 8 y, si no, imprima un mensaje de error
- crear un programa que dadas 2 variables booleanas, buen_tiempo y trabajo, nos diga si puedo ir a la playa. Si trabajo, no puedo ir, si no trabajo verifico que haga buen tiempo. En los casos negativos imprimir un mensaje adecuado.
*/

/* 
3.FOR
- crear un programa que reste 5 a los primeros 20 numeros (1,2,3,4...20)
- crear un programa que sume 10 a todos los numeros pares y reste 10 a todos los impares, para los primeros 20 numeros (1,2,3,4...20)
- crear un programa que calcule la suma de los primeros 20 numeros
- crear un programa que calcule la suma de los primeros n numeros, donde el valor de n se recibe desde el prompt
*/

/* 
4. Escribir una función que cree un array con n números aleatorios entre un mínimo y un máximo, pasados los tres parámetros de la función. Pasos:

1. Crear función.
2. Pasar parámetros.
3. Crear un array.
4. Crear n números aleatorios.
5. Agregar estos números en el array.
6. Llamar la función.
*/



/* 5.Calcular a través de una función el area de un cuadrado y imprimir el valor concatenandolo con una cadena descriptiva ejemplo  :  area cuadrado = valor 

6.Escribir una funcion que calcule el iva 

7.crea un function, tipCalculator(), que coje dos parametros, una cadena rapresenta la calidad del servicio recibido y un numero que rapresenta el coste total.

Return un tip, como un number, como los siguientes:
‘bad’ deberia devolver  5% tip
‘ok’ deberia devolver 15% tip
‘good’ deberia devolver 20% tip
‘excellent’ deberia devolver 30% tip
todos los demas por defecto 18% 


8.Vamos de compras:
Ejercicio 1 [fácil]

crear una variable cartera que contenga nuestro dinero inicial
crear un array de productos con X productos

Supongamos que el coste de cada producto sea de 1 unidad, 1€

Crear un función que dada mi cartera y el array de productos ponga en un nuevo array para el carrito todos los productos que podemos comprar, recordando que cada uno vale 1€. Sacar en output el array del carrito.

imprimir el carrito y lo que queda en mi cartera.


9.Ejercicio 2 [intermedio]
crear una variable cartera que contenga nuestro dinero inicial
crear un array de productos con X productos
Cada producto se representa bajo forma de objeto y lleva 2 propiedades (nombre y precio)

Crear una función que dada mi cartera y el array de productos ponga en un nuevo array para el carrito todos los productos que podemos comprar, quitando el precio de mi cartera. Una vez que no queda dinero o se acaban los productos sacar en output el array del carrito.

imprimir el carrito y lo que queda en mi cartera.

10.Ejercicio 3 [difícil]
Crear una variable cartera que contenga nuestro dinero inicial
crear un array de productos con 10 productos
Cada producto se representa bajo forma de objeto y lleva 3 propiedades (nombre , precio y cantidad)

Crear una función que imprima "decentemente" mis productos con nombre, precio y cantidad (>0) y pida cual producto queremos comprar.

Una vez que selecciono el producto se quita una unidad de la cantidad y se pone el producto en el carrito.

Preguntar después de cada producto puesto en el carrito si se quiere seguir comprando o sacar la cuenta. Si se pide la cuenta hay que calcular el total de los precios de los productos en nuestro carrito para luego quitarlo de la cartera.

Imprimir el carrito, el total de la cuenta y cuanto queda en nuestra cartera. */



// 1. escribir una funcion que, datos 2 numeros, genera un numero aleatorio entero, entre los 2 numeros

function generateNumber(min, max) { 
  return Math.round(Math.random() * (max - min) + min);
}

// 2. escribir una function que transforma un nombre en sus iniciales. Ejemplo: "Nico Gasparro" => "N.G."

function iniciales(str) {
  return str.split(" ").map(el => `${el[0]}.`).join("");
}

// 3. Algoritmo de Collatz: dato un numero natural mayor que 1, si esto es par dividirlo por 2, si es impar multiplicarlo por 3 y añadir 1. repetir la operacion para que el algoritmo termine siempre por 1. implementar el array y devolver un array con los valores de cada iteracion. Ejemplo 10 => [10,5,16,8,4,2,1]

function collatz(num) {
  // inicio un array
  let array = [num]
  
  while (num > 1) {
    if (num % 2 == 0) {
      num = num / 2
    } else {
      num = num * 3 + 1
    }
    array.push(num)
  }
  return array  
}


// 4. escribir un programa che imprima en consola todos los numeros de 1 a 100; para los multiplos de 3 imprir en consola "JAVA", para los multiplos de 5 imprimir en consola "SCRIPT", en fin para los numeros multiplos de 3 y 5 imprimir en consola "JAVASCRIPT"

/* for (let i = 0; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("JAVASCRIPT");
  } else if ( i % 3 == 0) {
    console.log("JAVA");
  } else if ( i % 5 == 0) {
    console.log("SCRIPT");
  } else {
    console.log(i);
  }
} */

// 5. calcula la serie de fibonacci que devuelve hasta n-numeros bajo forma de array. Ejemplo 9 => [1,1,2,3,5,8,13,21,34]

function fibonacci(n) {
  let final = [1,1]
  
  for (let i = 2; i < n; i++) {
    final.push(final[i-2] + final[i-1])
  }
  
  return final;
}


// 6. crea una funcion que devuelve la suma de los numeros en una cadena. 

/* function stringSum(cadena) {
  let arr = cadena.split("");
  let sum = 1;
  
  for (let i = 1; i < arr.length; i++) {  
    if (Number(arr[i])) sum += Number(arr[i]) 
  }
  return sum;
} */

function stringSum(cadena) {
  let creaArray = cadena.split("")
  let filtraNumeros = creaArray.filter(el => Number(el));
  let transformNumeros = filtraNumeros.map(el => Number(el));
  let suma = transformNumeros.reduce((acc, sum)=> {
    return sum += acc;
  },0);
  return suma;
}

// escribir una función que combina 2 array de números de forma decreciente, eliminando duplicados

function qqq(a1, a2){
  let fin = new Set(a1.concat(a2).sort((a,b)=>b-a))
  let final = Array.from(fin)
  return final;
}

//qqq([1,2],[1,2,3])


//escribir una función que acepta una cadena y devuelve la palabra más larga

function max(str){
  return str.split(" ").sort((a,b)=>(b.length - a.length))[0];
}



// escribir un programa que calcule los días que faltan hasta Año Nuevo

let día = new Date()
let añoNuevo = new Date("December 31, 2021")
let diff = Math.round((añoNuevo - día) / (1000 * 60 * 60 * 24))


// devolver los usuarios con el nombre que lleva menos de 4 letras

const Usuarios = [
  {
    'name': 'Nico',
    'lastName': 'Gaspa'
  },
  {
    'name': 'Nicola',
    'lastName': 'Milella'
  },
  {
    'name': 'Gracia',
    'lastName': 'Ruiz'
  },
  {
    'name': 'Chris',
    'lastName': 'Cardone'
  },
  {
    'name': 'Fernando',
    'lastName': 'NoLoSe'
  },
  {
    'name': 'Ni',
    'lastName': 'yo'
  }, 
  {
    'name': 'tu',
    'lastName': 'ciao'
  }
];



const controlLetrasUsuarios = Usuarios.map( persona => {
  return [persona.name];
});

let filtro = controlLetrasUsuarios.filter( nombre => {
  return nombre[0].length <= 4;
});

let join = filtro.join(", ");





// reverse an array, without changing the original array 

const numbers = [45, 12, 99, 2, 10, 45, 78, 34];

function reverseData(data) {
  
  const final = [];
  
  for (let i = 0; i < data.length; i++) {
    final.unshift(data[i]);
  }
  return final;
  
}

console.log(reverseData(numbers)); 




// shuffle an array 


const numbers = [45, 12, 99, 2, 10, 45, 78, 34];

function shuffleNum(data) {
  
  const final = [...data];
  
  for (let index = 0; index < data.length; index++) {
    
    const i = Number(index);
    const j = Math.floor(Math.random() * (i + 1));
    // destructuring assignment
    [ final[i], final[j] ] = [ final[j], final[i] ];
    
  }
  return final;
  
}


console.log(shuffleNum(numbers)); 



// initializes an object with odd key and array value with only odd numbers, also even key with even value array of numbers
const numbers = [45, 12, 99, 2, 10, 78, 34];
numbers.reduce((acc, number) => {
  if(number % 2 === 0) {
    acc.even.push(number);
  } else {
    acc.odd.push(number);
  }
  
  return acc;
}, {odd: [], even: []});
/* returns
{ odd: [ 45, 99 ], even: [ 12, 2, 10, 78, 34 ] }
*/