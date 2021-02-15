//function declaration vs function expression en javascript


/* con la function declaration puedo llamar la funcion donde quiero : hoisting!
 */

/* 
greet();
 
function greet() {
  const greeting = 'hello world!';
  return greeting;
}

greet();
*/

//se uso la function expression no puedo, si la llamo antes me sale error : Cannot access 'greet' before initialization

// porque cuando uso funcion expression la variable es inicializada sin valor arriba del documento como const greet;... y cuando encuetra greet(); no lleva un valor! y tengo que iniciarla con algo dentro como una funcion(), por eso deberia usar greet() despues de su inicializacion 

// error greet();

const greet = function() {
  return 'hello world!';
}

greet();

console.log(typeof greet == "function", true);
console.log(greet(), "hello world!");




//function statements are hoisted, but function expression is not hoisted

a();
b();

function a(){
   console.log("This is a function statement example")
}

var b = function (){
   console.log("This is a function expression example")
}