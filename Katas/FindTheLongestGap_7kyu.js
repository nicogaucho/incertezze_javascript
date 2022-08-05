// https://www.codewars.com/kata/find-the-longest-gap/train/javascript

/* Un espacio binario dentro de un número positivo num es cualquier secuencia de ceros consecutivos que está rodeada por unos en ambos extremos en la representación binaria de num.
Por ejemplo:
9 tiene representación binaria 1001 y contiene un hueco binario de longitud 2.
529 tiene representación binaria 1000010001 y contiene dos huecos binarios: uno de longitud 4 y otro de longitud 3.
Escriba la función gap (num) que, dado un número positivo, devuelva la longitud de su espacio binario más largo.
La función debería devolver 0 si num no contiene un espacio binario. */


function gap(num) {
    
    return  num.toString(2)
    .replace(/1/g, ' ')
    .split(" ")
    .map(el => el.length)
    .sort((a,b) => b - a)[0];
    
}


function gap(num) {
    const binary = num.toString(2);
    let longestSegment = 0;
    let currentLongestSegment = 0;
    for (let i = 0; i < binary.length; i++) {
        const bit = binary[i];
        if (bit == 1) {
            if (currentLongestSegment > longestSegment) {
                longestSegment = currentLongestSegment;
            }
            currentLongestSegment = 0;
        } else {
            currentLongestSegment += 1;
        }
    }
    return longestSegment;
}



console.log(gap(9),2)
console.log(gap(529),4)