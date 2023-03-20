// function definition : define a function with the keyword function
function add(x,y) {
    return x + y;
}

console.log(add(2,3));


// function declaration, expression cause you are declaring a variable which value is a function
const add = function(x,y) {
    return x + y;
} 

console.log(add(3,4));