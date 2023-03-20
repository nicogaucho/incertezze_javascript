// what is a callback function? 
// passing a function as argument of your function

// Do a bunch of calc on a number 
// passing outside function declaration
function doTheThing(number, calc) {
    const response = calc(number)
    return response;
}

const double = (x) => x * 2
const pow2 = (x) => Math.pow(x, 2);
const sqrt = (x) => Math.sqrt(x, 2);

console.log(doTheThing(2, double))
console.log(doTheThing(2, pow2))
console.log(doTheThing(2, sqrt))

// passing definition function as parameter 
function checkEven(number, callback) {
    const result = callback(number)
    return result;
} 

console.log(checkEven(10, (x) => {
    return x % 2 == 0 ? `${x} is even!!` : `${x} is odd!!`
}))



