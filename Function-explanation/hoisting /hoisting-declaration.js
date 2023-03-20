console.log(add(3,4));

// Cannot access 'add' before initialization, cause variable assignament is not hoisted 

let add = function add(x,y) {
    return x + y; 
}

// JS will only host declaration and not assignament  

// var is hoisted 
// let and const are effected by temporaty death zone 