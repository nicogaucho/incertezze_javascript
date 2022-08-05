function points(games) {
        
   return games.map( el => {
       let num = el.split(":")
       if ( num[0] > num[1] ) {
           return 3;
       } else if ( num[0] == num[1] ) {
           return 1;
       } else {
           return 0;
       }
   }).reduce((t,n) => t + n);
    
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);