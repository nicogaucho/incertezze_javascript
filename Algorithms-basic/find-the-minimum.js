// find the minumum value in an array of numbers

function findMin(numbers) {
    let minimum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < minimum) {
            minimum = number;            
        }
    }
    return minimum;
}

console.log(findMin([1,2,3]), 1);
console.log(findMin([10,50,100]), 10);
console.log(findMin([-1,-20,-30]), -30);
