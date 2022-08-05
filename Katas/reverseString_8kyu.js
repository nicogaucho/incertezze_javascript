// https://www.codewars.com/kata/reversed-strings/train/javascript

//  kata: reverse a string
//  este kata pide de crear una funcion que invierta una cadena. Ejemplo: 'world' => 'dlrow' 

function solution(str) {
    return str.split("").reverse().join("");
} 

//console.log(solution('world')) => 'dlrow'
console.log(solution('world'))

/* function solution(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const letra = str[i];
        invertida += letra;
    }
    return invertida;
} */