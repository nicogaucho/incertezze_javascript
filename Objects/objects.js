//escribir una función, dado en la entrada un array de objetos, vuelva el nombre del mejor jugador, su media de puntuación y comprobar si está inscrito al próximo torneo. 

let data = [
  {
    name: 'nico',
    puntuacion: [21, 3, 10, 19],
    proximoTorneo: true
  }, 
  {
    name: 'nicola',
    puntuacion: [30, 5, 8, 17],
    proximoTorneo: true
  }, 
  {
    name: 'gracia',
    puntuacion: [10, 3, 5, 6],
    proximoTorneo: false
  }, 
  {
    name: 'jacopo',
    puntuacion: [25, 9, 12, 33],
    proximoTorneo: true
  }, 
  {
    name: 'chris',
    puntuacion: [18, 30, 9, 8],
    proximoTorneo: true
  }, 
  {
    name: 'mar',
    puntuacion: [10, 12, 14, 9],
    proximoTorneo: false
  }, 
];

// vamos a escribir un poco de pseudo-code

//1. creo un nuovo array de objetos con una funcion     .map()
  //2.mapeo los elementos de este array por cada propriedad    .map(el => [el.name, el.puntacion, el.proximoTorneo])
    //3. calculo la media solo de la segunda propriedad      .reduce()
      //4. ordeno en forma desc el resultato       .sort((a,b) => b - a)
        //5. devuelvo un template para pasar los valores en una cadena      `el mejor ${}`



function getMvp(arr) {
  let newArr = arr.map(el => {
    return [el.name, el.puntuacion.reduce((accumulator, number) => {
      return accumulator + number / el.puntuacion.length; 
    },0), el.proximoTorneo];
  });

  let orden = newArr.sort((a,b) => b[1] - a[1])[0];
  // console.log(orden);

  let jugador = `el mejor jugador se llama ${orden[0]}, su puntuacion media es ${orden[1]}, su partecipacion al proximo torneo esta ${(orden[2]) ? 'confirmada' : 'no es confirmada'}, nos vemos a la proxima edicion!!`; 

  console.log(jugador);
};


getMvp(data);
 



