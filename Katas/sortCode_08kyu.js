// https://www.codewars.com/kata/sort-the-gift-code/train/javascript

// sort the code. Ejemplo 'abcdef' => 'abcdef', 'pqksuvy' => 'kpqsuvy'


function sortTheCode(code) {
    // convertir en un array 
    // ordenar las letras en la cadena 
    return code.split("").sort().join("")

}


console.log(sortTheCode('abcdef'), 'abcdef')
console.log(sortTheCode('pqksuvy'), 'pqksuvy')