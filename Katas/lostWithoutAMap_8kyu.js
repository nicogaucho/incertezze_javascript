// https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

// con programacion imperativa
function maps(numbers){
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        const doubledNumber = number * 2;
        doubled.push(doubledNumber);
    }
    return doubled;
}     


// con side-effects
function maps(numbers){
    const doubled = [];
    numbers.forEach((number) => {
        const doubledNumber = number * 2;
        doubled.push(doubledNumber);
    });
    return doubled;
}


// con high-order-function
function maps(numbers) {
    const doubled = numbers.map((number) => {
        const doubledNumber = number * 2;
        return doubledNumber;
    });
    return doubled;
}


// con Array.map() one-line 
function maps(numbers) {
    return numbers.map((number) => number * 2);
}


// con Array.map() one-line no brackets syntax
function maps(numbers) {
    return numbers.map(number => number * 2);
}


//console.log(maps([1,2,3]), [2,4,6]);