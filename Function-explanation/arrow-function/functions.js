calculateVat = (price, vat) => price + ((price * vat) / 100);

console.log(calculateVat(100, 10)); 



/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18% 

*/


// JavaScript Algorithm: Sum All The Numbers in a Range

function sumAll(arr) { 
  // code...
}

sumAll([1,4]); //should return 10.
sumAll([1,5]); //should return 15. 
sumAll([5,1]); //should return 15. 
sumAll([5,5]); //should return 5.


function sumAll(arr) {
    
    let max = Math.max(arr[0], arr[1]);
    
    let min = Math.min(arr[0], arr[1]);
   
    let newArr = [];
    
    for(let i = min; i <= max; i++){
      newArr.push(i);
    }
    
    sum = newArr.reduce((a,b)=> a + b);
    
    return sum;
  };

  sumAll([1,4]); // returns 10. 
  sumAll([11,15]); //returns 65.


function allArgs(args) {
  let startArgs = 0;
  let i = 0;
  while(i < args.length) {
    startArgs += args[i];
    i++;
  }
  return startArgs;
}

console.log(allArgs([1,2,4]))

function anotherRandomFunc(){
  message = "Hello";
  let message;
}

anotherRandomFunc();
