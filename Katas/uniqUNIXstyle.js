// https://www.codewars.com/kata/52249faee9abb9cefa0001ee

// Implement a function which behaves like the uniq command in UNIX.

// It takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.

// Example:

// ["a", "a", "b", "b", "c", "a", "b", "c"]  =>  ["a", "b", "c", "a", "b", "c"]
// ARRAYS FILTERING ALGORITHMS

function uniqCommand(a) {
  // se non ce niente torna un array vuoto
  if(!a.length) return [];
  // valore finale dove salvare la risultante inizia da currentValue 
  let finalResult = []; 
  // cicla dal secondo all'ultimo 
  for (let i = 0; i < a.length; i++) {
    let currentValue = a[i];
    if (currentValue !== a[i + 1]) {
      currentValue = a[i];
      finalResult.push(currentValue);
    }
  };
  return finalResult;
}

console.log(uniqCommand(["a", "a", "b", "b", "c", "a", "b", "c"]));






