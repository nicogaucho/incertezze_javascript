/* first-class function se pueden usar como cualquier altra variables. Por eje, una funcion puede ser usada en otra funcion como argumento de la funcion, puede ser devuelta de oltra funcion, puede ser asignada como valor de una variable  */

/* 
1. asignar funcion anonima a una variable : 


const meDasLaFecha = () => {
  console.log('Es el: ', new Date().toString());
};

meDasLaFecha();

*/


// crea una variable llamada hola e pone dentro una funcion que imprime hola todo el mundo!


const Hola = () => console.log('hola todo el mundo!');

Hola();







