// calcula el factorial 

/* !4 = 4*3*2*1 = 24
   5 = 5*4*3*2*1 = 120

   n * (n-1) 
*/
function getF(n) {

 let f = n;
 
 for(let i = 1; i < n; i++){
    f = f * i
 } 

 return f
}

getF(4)