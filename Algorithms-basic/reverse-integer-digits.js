// input : 27953 
// output : 35972 

function reverseIntDigits(input) {

    let output = 0;
    let extractionDigit;
    let currentNumber;

    while (input > 0) {
        
        extractionDigit = input % 10;
        output = (output * 10) + extractionDigit; 
        currentNumber = Math.floor(input / 10);
        input = currentNumber;
        
    }
    
    return output;


}

// function reverseIntDigits(input) {

//     return input.toString().split("").reverse().join("")

// }

console.log(reverseIntDigits(27953))

