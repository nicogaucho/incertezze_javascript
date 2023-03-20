/* let number = 20;
let sum = 0;

for (let i = 0; i < number; i++) {
  sum += i;
}

console.log("la suma de los primeros 20 numeros es: ", sum); */


/* 
let nNumber = parseInt(prompt("Insertar a number int: "));
let sum = 0;

for (let i = 0; i < nNumber; i++) {
  sum += i;
}

console.log("la suma de los primeros n numeros es: ", sum); */


// escribir un programa que imprima de 1 a 100: si el número es múltiplo de 3 impresión java ,si múltiplo de 5 impresión script, si múltiplo de 15 impresión javascript imprime de otro modo el número. 

/* for (let i = 1; i < 101; i++) {
  console.log(i)

  if (i % 15 == 0) {
    console.log("JAVASCRIPT")
  } else if (i % 3 == 0) {
    console.log("JAVA")
  } else if (i % 5 == 0) {
    console.log("SCRIPT")
  } else {
    console.log(i)
  }
} */




// stamapare l'area di di cerchi raggio da 1 a 50

/* for (let r = 1; r <= 50; r++) {

  let pg = 3.14;
 
  let area = (pg * r**2 ).toFixed(2); // usa Math.PI, usa Math.pow(base, esponencial)

  console.log( ` il cerchio di raggio ${r} ha area ${area} `  );
  
} */


let r = 1;
while ( r <= 50 ) {
  console.log( `il cerchio di raggio ${r} ha area ${(Math.PI * r**2).toFixed(2)}`  );
  r += 1; // r++;
}



