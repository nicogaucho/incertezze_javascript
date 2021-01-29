//higher order function son funciones que toman una funcion como argumento, o devuelven una funcion como resultado.

/* ejemplo: 

`addEventListener` toma una funcion como segundo argumento. la funcion no es envocada imediatamente. la funcion será llamada a traves del browser cuando pasa el evento. 

*/

document.body.addEventListener('click', () => {
  console.log('body has been clicked!');
});

//puede ser escita igual:

const bodyClick = () => {
  console.log('body has been clicked!');
}

document.body.addEventListener('click', bodyClick);



// el .then de una Promise es una higher order function. la funcion pasada será llamada cuando la promise esta resuelta. 

fetch('https://www.reddit.com/r/javascript/.json')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });


  //puede ser escita igual:

  const respondeJSON = response => responde.json();
  const logResult = result => {
    console.log(result);
  };

  fetch('https://www.reddit.com/r/javascript/.json')  
    .then(respondeJSON)
    .then(logResult);


/* ejercicio fetch: 

Hacemos una fetch request a una api usando una higher order function  

npm init -y 

npm install node-fetch

*/


/* ejecicio forEach: 

1. crea un array de nombres, y imprime cada nombre del array 
2.

*/


/* ejercicio map: 

1.toma un pollo y un pop en un array y crea otro array que devuelven la comida cocinda 
2.crea un nuevo array de un objecto con la propriedad value y index 
3.dato un array, eleva a potencia los numeros dentro del array, y devuelve el resultado como cadena
*/


/* ejercicio filter: 

1. dato un array crea un array que coja solo los numeros pares  
2. dato un array con los dias de la semana, devuelve solo los dias que empiezan con la letra M
3. dato un array crea un array solo con las personas la cual el primer nombre es menor de 4 letras 
4. crea un nuevo array solo con los animales de tamaño pequeño
5.crea un nuevo array solo con las palabras que llevan mas de 6 letras 
*/


/* ejercicio reduce:

1.



*/

