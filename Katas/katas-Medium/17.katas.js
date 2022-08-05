// en este ejercicio crearemos una funcion que toma una lista de numeros enteros positivos y cadenas. Return un array de solo numeros sin las cadenas. 

filteredList([1,2,3,'a','b',4,5,6]) 

result [1,2,3,4,5,6]


function filteredList(list) {
  // crea un lugar donde poner la lista filtrada
  const filtered = [];
  // itera sobre el array
  for (let i = 0; i < list.length; i++) {
    const currentItem = list[i];
      // if el dato corriente es un numero 
      if (typeof currentItem === 'number') {
        // push el dato en el lugar de la lista filtrada 
        filtered.push(currentItem);
      }
  }
  // return el lugar de la lista filtrada 
  return filtered;
}

console.log(filteredList([1,2,3,'a','b',4,5,6]));
console.log(filteredList([1,2,'a','b','123',123])); 



// con .filter 

function filtraLista(items) {
  return items.filter(el => typeof el === 'number');
}


console.log(filtraLista([1,2,3,'a','b',4,5,6]));
console.log(filtraLista([1,2,'a','b','123',123]));