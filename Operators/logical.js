/*  logical operators improvement  */

//si a es truty return a, si a es falsy return b 
if ( !a ) {
    a = b;
  } 
  
  //mismo resultado 
  a ||= b;
  
  
  // or 
  // si a es truty return b, si a es falsy return a 
  if (a) {
    a = b; 
  } 
  
  // mismo resultado
  a &&= b;


