// input: 123 , output 1 + 2 + 3 = 6

/* TODO: SUM OF DIGITS */
// function sumOfDigits(input) {
//     let output = 0;
//     let currentInput;
//     while (input > 0) {
//         currentInput = input % 10; // 123 % 10 = 3 
//         output = output + currentInput; // 0 + 3 = 3
//         input = Math.floor(input / 10); // 123 / 10 = 12,3 solo la parte intera 12
//     }
//     return output;
// }


//console.log(sumOfDigits(123));

function sumOfDigits(input) {

    return input.toString().split("").map(el => Number(el)).reduce((t,n) => t + n)
    
}

console.log(sumOfDigits(123))

