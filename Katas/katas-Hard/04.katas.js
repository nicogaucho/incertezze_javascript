// my grandfather always predicted how old people wuold ge, and right before he passed away he revealed his secret! In honor of my grandfather's memory we will write a function using his formula!

/* 
* take a list of ages when each of your great-grandparent died
* multilpy each number by itself 
* add them all together 
* take the square root of the result 
* divide by two


ex. predictAge([65, 60, 75, 55, 60, 63, 64, 45]) === 86
*/ 

// ok andiamo a tradurre tutto questo in codice 

function predictAge(arr) {
  let multilpyByItself = arr.map(el => el * el);
  let add = multilpyByItself.reduce((a,b) => a + b);
  let sqrRoot = Math.sqrt(add);
  let dividedByTwo = sqrRoot / 2;
  return Math.floor(dividedByTwo);
}

console.log(predictAge([65, 60, 75, 55, 60, 63, 64, 45])); 