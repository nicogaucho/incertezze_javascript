// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// declarative programming 

function removeChar(str){

    let array = str.split("")
    let inicial = [];
    for (let i = 0; i < array.length; i++) {
        if( i !== 0 && i !== array.length - 1){
            inicial.push(array[i])
        } 
    }

    return inicial.join("")
    
}; 


// con los metodos de los array 

function removeChar(str){

    let array = str.split("")
    let removeFirst = array.shift()
    let removeLast = array.pop()

    return array.join("")
};





console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');


