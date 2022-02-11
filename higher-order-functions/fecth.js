const fetch = require('node-fetch');
const url = 'https://www.reddit.com/r/birdswitharms.json';



fetch(url)
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });

  
// pasar una funcion de devuelve rsponse.json() dentro de la funcion fetch significa unar una higher-order-function 

// porque .then  es una higher-order-function ¿?

// porque acepta una funcion como parametro y devuelve la invocacion de otra funcion .json() por ejemplo 



