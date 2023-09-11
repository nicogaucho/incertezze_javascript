// sort of explanations of indexOf()

// 1. is not a high order function 

const people = ['tom', 'jack', 'mark', 'cj'];

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  } 
  return -1;
}


console.log(indexOf(people, 'jack'));


// sort of explanantion of forEach
let arr = [2, 22, 44, 20, 21, 50];
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

forEach(arr, (index, el, array) => {console.log(index, el, array)} );



// sort explanations of map 
function map(array, callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results.push(callback(array[i]))
  }
  return results;
}

console.log(map([2,4], (value) => value * 2));