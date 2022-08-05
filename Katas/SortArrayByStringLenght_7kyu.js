// https://www.codewars.com/kata/sort-array-by-string-length/train/javascript

/* Escriba una función que tome una matriz de cadenas como argumento y devuelva una matriz ordenada que contenga las mismas cadenas, ordenadas de la más corta a la más larga.

Por ejemplo, si esta matriz se pasara como argumento:

["Telescopios", "Gafas", "Ojos", "Monóculos"]

Su función devolvería la siguiente matriz:

["Ojos", "Gafas", "Monóculos", "Telescopios"]

Todas las cadenas en la matriz pasada a su función tendrán diferentes longitudes, por lo que no tendrá que decidir cómo ordenar varias cadenas de la misma longitud. */


function sortByLength(array) {
    let count = array.sort((a,b)=> a.length - b.length)  
    return count;
}





console.log(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"])
console.log(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"])
