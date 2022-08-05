// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let positive = [];
    let negative = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positive.push(input[i])
        } else {
            negative.push(input[i])
        }
    }
    let final = [];
    final.push(positive.length);
    let sum = 0;
    for (let i = 0; i < negative.length; i++) {
        sum += negative[i]
    }
    final.push(sum);
    return final;
}


    // let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    // let actual = countPositivesSumNegatives(testData);
    // let expected = [10, -65];

   
    function cuentaPositivosSumaNegativos(test) {
        let final = []; 
        let positivos = test.filter(el => el > 0);
        let negativos = test.reduce((t,n) => {
            if(n < 0) {
                t += n
            }
            return t
        }, 0)
        final.push(positivos.length);
        final.push(negativos);
        return final;
    }

    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = cuentaPositivosSumaNegativos(testData);
    let expected = [8, -50];    

    console.log(actual);

