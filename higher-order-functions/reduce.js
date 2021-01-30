let numbers = [1, 2, 3, 4, 5];

// 2. Iteracion en el array
let sum = numbers.reduce((sum, number) => { // sum será el valor anterior del acumulador
  sum += number; // 3. actuliza el acumulador
  return sum; // 4.devuelve el acumulador
}, 0); // 1. Inicializacion del acumulador

console.log(sum);





const frutas = ['platano', 'manzana', 'uva', 'naranja', 'melacoton', 'platano', 'fresa', 'melon', 'fresa', 'fresa', 'naraja', 'manzana','platano', 'uva', 'platano', 'fresa', 'melon'];

const selecion = frutas.reduce((selection, fruta) =>{
  // empezamos de object selection vacio
  // verifica si cada fruto esta en el objecto selection como su propriedad
    // if si hay
    if (fruta in selection) {
       // incrementa el valor de la propriedad de fruta en el objeto selecion
       selection[fruta] ++; // access dynamic property
    } else {
      // añade la propriedad a selecion con valor 1 
      selection[fruta] = 1; // add property dynamically to an object
    }
    return selection;
},{});

console.log(selecion);




const precios = [29.76, 41.85, 46.5];

const mediaPrecios = precios.reduce((media, precio, index, array) =>{ return media + precio / array.length;
},0);

console.log(mediaPrecios);

const suma = precios.reduce((sum, precio) => {
  return sum + precio; 
},0);

console.log(suma);





const dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo'
];

const inicioDias = dias.reduce((diaCorto, dia)  =>{
  // incapsular la primera 3 letras en variable
  const primeraTresLetras = dia.substring(0, 3);
    // push esta variable en el array
      diaCorto.push(primeraTresLetras);
     // return del array
      return diaCorto;
},[]);

console.log(inicioDias);






const palabras = ['spray', 'limite', 'elite', 'esuberante', 'eliminacion', 'presentacion'];

const largaPalabra = palabras.reduce((larga, palabra) =>{
  if ( palabra.length > 6 ) {
    larga.push(palabra); // Array.push(el)
  }
  return larga; // Array iterator
},[]);

console.log(largaPalabra);



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