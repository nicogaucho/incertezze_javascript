const comida = ['🐔', '🌽'];

const comidaCocinada = comida.map(food => {
  if(food == '🐔') {
    return '🍗';
  } else {
    return '🍿'
  }
});

console.log(comidaCocinada);







let numbers = [1,2,3,4,5];

let doble = numbers.map((number, index, array)=> {
  console.log(number, 'es el indice', index, 'dentro del array:', array);
  return number * 2;
});

console.log(doble);






let numeros = [4,8,10,12,16,20,24,28];

const numeroEspecifico = numeros.map((value, index) => ({ value, index }));

console.log(numeroEspecifico);




let pow = [2,4,25];

const potenza = pow.map( num => { return Math.pow(num, 2) } ).toString();

console.log(potenza);