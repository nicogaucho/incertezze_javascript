/* 
We have a function called binaryToNumber that takes an array as its parameter.

The array parameter should contain ones and zeros. Our job is to take those numbers(ones and zeros), then convert them from binary to the equivalent number form

//Examples:
binaryToNumber([0, 1, 1, 0]) should return 6
binaryToNumber([1, 1, 1, 1]) should return 15
binaryToNumber([0, 0, 0, 1]) should return 1
*/

const binaryToNumber = arr => {
  return parseInt(arr.join(''), 2);
};


console.log(binaryToNumber([0, 1, 1, 0], 6)); 
console.log(binaryToNumber([1, 1, 1, 1], 15));
console.log(binaryToNumber([0, 0, 0, 1], 1)); 