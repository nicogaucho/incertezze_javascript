//Un callback es una función que se pasa a otra función como un argumento que se puede invocar más tarde dentro de la función

//Synchronous callbacks

//Synchronous significa que las instrucciones de código se ejecutan inmediatamente una tras de otra de manera secuencial

/* function imprimir(num, result) {
  console.log(`${num} es ${result}`);
}

function controlaNumPares(num, callback) {
  const result = (num % 2 == 0) ? 'Par' : 'Impar';
  callback(num, result);
}

controlaNumPares(10, imprimir);  */

//Callbacks asíncronos. Si una callback se ejecuta después que termine una operación asíncrona, entonces es un callback asíncrona.
function vamosPedir() {
  setTimeout(() => {
    return (Math.random() * 10) <= 5 ? 'Cafe' : 'tea';
  }, 1000);
}

let pedido = vamosPedir();
console.log(`el pedido es: ${pedido}`);

//dentro de la funcion vamosPedir esa devuelve un valor despues de 1 segundo, pero el console.log ya ha ejecutado vamosPedir con un valor undefined porque son dos operaciones async. 

//como podemos solucionar ?
function vamosAPedirAlgo(callback) {
  setTimeout(() => {
    const pedido = (Math.random() * 10) <= 5 ? 'Cafe' : 'tea';
    callback(pedido);
  }, 1000);
}

vamosAPedirAlgo((pedido) => {
  console.log(`el pedido es: ${pedido}`);
}); 

//vamosAPedirAlgo resuelve primero la callback asyncrona y luego imprime en consola 🎊 🎉🥳

//Nested callbacks

/* function vamosAPedirAlgo(callback) {
  setTimeout(() => {
    const pedido = (Math.random() * 10) <= 5 ? 'Cafe' : 'tea';
    callback(pedido);
  }, 1000);
}

function hacerPedido(pedido, callback) {
  setTimeout(() => {
    callback(pedido + ' ' + 'listo');
  }, 1000);
}

function servirPedido(pedido, callback) {
  setTimeout(() => {
    callback(pedido + ' ' + 'servido');
  }, 1000);
}

vamosAPedirAlgo((pedido) => {
  console.log(`el pedido es: ${pedido}`);
  hacerPedido(pedido, (queTalElPedido) => {
    console.log(queTalElPedido);
    servirPedido(pedido, (estaServido) =>{
      console.log(estaServido);
    })
  })
}); */


