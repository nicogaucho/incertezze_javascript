// data una string, transforma in maiusola le lettere che hanno come indice un numero pari e in minuscola le lettere in posizione dispari e all'opposto. l'indice 0 é considerato pari. 


// esempio = capitalize('abcdef') ... risultato = ['HaCkAdEmY', 'hAcKaDeMy']


function capitalize(string) {
  return [ string.split('')
                  .map((letter, index) => (index % 2 == 0) ? letter.toUpperCase() : letter.toLowerCase())
                  .join(''), 
          string.split('')
                  .map((letter, index) => (index % 2 !== 0) ? letter.toUpperCase() : letter.toLowerCase())
                  .join(''), 
  ]}

console.log(capitalize('hackademy'));