/* 
scrivi una funzione che restituisca il multiplo piu alto di un valore e un limite su cui calcolarlo 

esempio => maxMulpile(2,7) == 6  

esempio => maxMulpile(3,10) == 9

esempio => maxMultiple(4, 33) == 32

esempio => maxMultiple(7, 17) == 14

esempio => maxMultiple(10, 50) == 50
*/


function maxMultiple(divisore, bound) {
  for (let i = bound; i >= divisore; i -= 1) {
      if (i % divisore == 0) return i;
    }
  } 

console.log(maxMultiple(2,7)); 


// imprime en console todos los multiplo de 2 presentes en los primos 20 numero enteros positivos en orden decreciente
/* for (let i = 20; i >= 0; i -= 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */






