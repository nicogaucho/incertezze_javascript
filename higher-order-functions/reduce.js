let numbers = [1, 2, 3, 4, 5];

// 2. Iteracion en el array
let sum = numbers.reduce((sum, number) => { // sum será el valor anterior del acumulador
  sum += number; // 3. actuliza el acumulador
  return sum; // 4.devuelve el acumulador
}, 0); // 1. Inicializacion del acumulador

console.log(sum);





const frutas = ['platano', 'manzana', 'uva', 'naranja', 'melacoton', 'platano', 'fresa', 'melon', 'fresa', 'fresa', 'naraja', 'manzana','platano', 'uva', 'platano', 'fresa', 'melon'];

const selecion = frutas.reduce((selection, fruta) =>{
  // empezamos de object selecion vacio
  // verifica si cada fruto esta en el objecto selection como su propriedad
    // if si hay
    if (fruta in selection) {
       // incrementa el valor de la propriedad de fruta en el objeto selecion
       selection[fruta] ++; // access dynamic property
    } else {
      // añade la propriedad a selecion con valor 1 
      // add property dynamically to an object
      selection[fruta] = 1;
    }
    return selection;
},{});

console.log(selecion);




const precios = [29.76, 41.85, 46.5];






const dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
];





const palabras = ['spray', 'limite', 'elite', 'esuberante', 'eliminacion', 'presentacion'];





const presonas = [{
  id: 1,
  nombre: 'nico',
  apellido: 'G.'
}, {
  id: 2,
  nombre: 'nicola',
  apellido: 'milella'
}, {
  id: 3,
  nombre: 'gracia',
  apellido: 'ruiz'
}, {
  id: 4,
  nombre: 'christofer',
  apellido: 'nolose'
}];




const animales = [{
  name: 'gato',
  size: 'pequeño'
}, {
  name: 'peroo',
  size: 'pequeño'
}, {
  name: 'leon',
  size: 'mediano'
}, {
  name: 'elefante',
  size: 'largo'
}];