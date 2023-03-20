const comida = ['🐔', '🌽'];

const comidaCocinada = comida.map(food => {
  if(food == '🐔') {
    return '🍗';
  } else {
    return '🍿'
  }
});

console.log(comidaCocinada);



let numeros = [4,8,10,12,16,20,24,28];

const numeroEspecifico = numeros.map((value, index) => ({ value, index }));

console.log(numeroEspecifico);




let numbers = [1,2,3,4,5];

let doble = numbers.map((number, index, array)=> {
  console.log(number, 'es el indice', index, 'dentro del array:', array);
  return number * 2;
});

console.log(doble);



let pow = [2,4,25];

const potenza = pow.map( num => { return Math.pow(num, 2) } ).toString();

console.log(potenza);




const arrayNumber = [13, 42, 1337];

const double = arrayNumber.map((num) =>{
  return num * 2;
});

console.log(double);




const giornate = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
];

const diasCortos = giornate.map((dia) =>{
  return dia.substr(0,3);
});

console.log(diasCortos);



const people = [{
  first_name: 'CJ',
  last_name: 'R.'
}, {
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  first_name: 'Douglas',
  last_name: 'Crockford'
}];

const nombreEntero = people.map((person) => {
  return `${person.first_name} ${person.last_name}`;
})

console.log(nombreEntero);






const animals = [{
  'name': 'cat',
  'size': 'small'
}, {
  'name': 'dog',
  'size': 'small'
}, {
  'name': 'lion',
  'size': 'medium'
}, {
  'name': 'elephant',
  'size': 'big'
}];

const nombreAnimals = animals.map((ani) =>{
  return ani.name;
});

console.log(nombreAnimals);




const theNumbers = [4, 8, 15, 16, 23, 42];

const valueIndex = theNumbers.map((value, index, array) =>{
  return {
    ValueIndex: index, 
    ValueNumber: value
  };
});

console.log(valueIndex);





const starter = [2, 5, 10];

const multiplicado = starter.map((start, index, array) =>{
  let siguienteNum = index + 1;
  
  if (index == array.length - 1) {
    siguienteNum = 0;
  }

  return start * array[siguienteNum];
});

console.log(multiplicado);

