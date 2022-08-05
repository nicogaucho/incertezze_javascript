let numbers = [1,2,3,4];

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/* el foreach hace solo side effects, no cambia el array inicial  */
let n = numbers.forEach( (el) => console.log(el));

console.log(n);