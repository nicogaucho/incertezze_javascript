// ritorna le due etá piú alte dato un array di numeri che rappresentano delle etá.

function twoOldestAges(ages) {
  // possiamo sortare l'array dal piu basso al piu alto
  const sorted = ages.sort((a,b) => {
    if( a < b ) {
      return - 1;
    }
    if( a > b ){
      return 1;
    }
  })
  // return degli ultimi 2 valori nell'array
  
  /* const final = [];
  final.push(ages[ages.length - 1]);
  final.push(ages[ages.length - 2]);
  return final; */

 return sorted.slice(sorted.length - 2)

}

console.log(twoOldestAges([1,2,10,8,22,3,6,12,80,4,55,19]));


/* 
como funziona .sort() ... [1, 2, 10, 8]

sorta dal piu piccolo al piu grande ...  [1, 2, 8, 10]

se il valore anteriore é piu piccolo del posteriore lo posiziona prima ( a < b )  return (-1)

se il valore antecente é maggiore del valore posteriore lo posiziona dopo ( a > b ) return (1)
*/

// fai tutto in single line 🤓

// prova a risolvere questo esercizio senza sortare...

console.log(twoOldest([1,2,10,8,22,3,6,12,80,4,55,19]));