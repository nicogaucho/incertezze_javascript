// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript


// Se le dará un array y un valor límite. Debe verificar que todos los valores en el array estén por debajo o sean iguales al valor límite. Si lo son, devuelve verdadero. De lo contrario, devuelve falso.

// Puede asumir que todos los valores en la matriz son números.


function smallEnough(a, limit){
    return a.every(number => number <= limit)
}


console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);



