

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
  };
}

console.log(a);




// calcular la media de la puntuacion del partido de bowling, la maquina puse numeros negativos y queremos eliminarlos, haciendo la media solo de los numeros positivos

let puntuacion = [20, 10, -5, 5, 35, -10, 25, -15, 15, 30, 40, -25];

function cleanAndAverage(arr) {
  // filtra los positivos
  let filtered = arr.filter( el => el >= 0 )
   // media entre los positivos
    let suma = filtered.reduce((accumulator, num)=>{
        return accumulator + num / filtered.length;
      },0);
  console.log(suma);
};

cleanAndAverage(puntuacion);



// generado un array de números aliatorios dado un mínimo y un máximo, filtriamo sólo los números pares, duplicamos los números obtenidos y nos sumamos 10, filtriamos estos números para valores mayores de 10 y menores de 100 y hagamos la suma final

function getRandomArray(num, min, max) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let rand = Math.floor(Math.random() * (max - min) ) + min
    arr.push(rand);
  }
return arr;
};

function filtroParaPares(array) {
  let pares = array.filter(el => el % 2 == 0)
                   .map( el => el * 2 + 10)
                   .filter(el => el > 10 && el < 100)
                   .reduce((acc, numero) =>{
                     return acc + numero; 
                   },0)
  return pares;
}

console.log(filtroParaPares(getRandomArray(10, 0, 8))); 




// elimina los duplicados y ordena de forma cresciente y desc el array con funcional y imperativ programming

let matrix = [ 1, 2, 3, 1, 2, 3, 5, 5];


//imperativ programming 

let temp = [];

for (let i = 0; i < matrix.length; i++) {
    if ( !temp.includes(matrix[i]) ) {
      temp.push(matrix[i]);
    }
}

console.log(temp);


// functional programming 

let final = Array.from(new Set(matrix)).sort((a,b) => b - a);

console.log(final); 




// encuentra los elementos iguales en los dos array

let age = [20, 22, 40, 39, 22, 15, 52, 12, 13, 14];

let myage = [12, 21, 12, 13, 15, 12, 12, 12, 40, 31, 41, 40, 15, 13];

let reality = [...new Set(myage)].filter(el => age.includes(el));

console.log(reality);