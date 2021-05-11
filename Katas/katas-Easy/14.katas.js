//  calculate the average in the array, with decimal down adjustment of a number.

/* let sum = 0;

function getAverage(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    sum += num;
  }
  return Math.floor(sum / numbers.length);
} */



function getMedia(numbers) {
  let media = numbers.reduce( (acc, num) =>{
    return acc += num;
  }, 0);

  return Math.floor(media / numbers.length);
} 

console.log(getMedia([2,5,7,9,4,5]), 5);


