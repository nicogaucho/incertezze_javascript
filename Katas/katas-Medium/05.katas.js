/* 
your team is writing a fancy new text editor and you've been tasked with implementing the line numbering. 
write a function which takes a list of strings and returns each line prepended by the correct number.
the numbering starts at 1. the format is: n: string. notice the colon and space in between. 

ex. number ([]) => []
    number (["a", "b", "c"]) => ["1: a", "2: b", "3: c"]

*/

function numbering(arrayOfString) {
 return arrayOfString.map( (el, index) => {
   return `${index + 1} : ${el}`;
 }) 
}

console.log(numbering([]));
console.log(numbering(["a", "b", "c"]));