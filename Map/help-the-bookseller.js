// DESCRIPCIÓN:
// Un librero tiene muchos libros clasificados en 26 categorías etiquetadas A, B,... Z. Cada libro tiene un código c de 3, 4, 5 o más caracteres. El primer carácter de un código es una letra mayúscula que define la categoría del libro.

// En la lista de existencias del librero, cada código c va seguido de un espacio y de un entero positivo n (int n >= 0) que indica la cantidad de libros de ese código en existencia.

// Por ejemplo, un extracto de una lista de existencias podría ser:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// o
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] o ....
// Se le dará una lista de existencias (p. ej.: L) y una lista de categorías en mayúsculas, p. ej.:

// M = {"A", "B", "C", "W"}
// o
// M = ["A", "B", "C", "W"] o ...
// y tu tarea es encontrar todos los libros de L con códigos pertenecientes a cada categoría de M y sumar su cantidad según cada categoría.

// Para las listas L y M de ejemplo, debe devolver la cadena (en Haskell/Clojure/Racket una lista de pares):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// donde A, B, C, W son las categorías, 20 es la suma del libro único de la categoría A, 114 la suma correspondiente a "BKWRK" y "BTSQZ", 50 correspondiente a "CDXEF" y 0 a la categoría 'W' ya que no hay código que comience con W.

// Si L o M están vacíos, la cadena de retorno es "" (Clojure y Racket deberían devolver una matriz/lista vacía en su lugar).

// Nota:
// En el resultado los códigos y sus valores están en el mismo orden que en M.

function stockList(listOfArt, listOfCat){
    // sitio donde almacenar los datos
    const mapa = new Map();
    // bucle para agregar las claves con valor inicial 0 a nuetra estructura datos basandonos en listOfCat
    listOfCat.forEach((cat) => {
        mapa.set(cat, 0)
    })
    // bucle para agregar a cada categoria presente la cantidad asociada 
    listOfArt.forEach((art) => {
        const divide = art.split(' ');
        const [cat, cantidad] = divide;
        const [categoría] = cat;        
        // condición para averiguar que la categoria comienze por la letra inicial en nuestra estructura datos 
        if (mapa.has(categoría)) {
            // agregar a la categoria la cantidad asociada 
            mapa.set(categoría, mapa.get(categoría) + Number(cantidad))
        }
    }); 
    // devuelve un objeto a partir de un Map
    return Object.fromEntries(mapa);
}


const l = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
const m = ["A", "B", "C", "W"];
console.log(stockList(l, m));

//result = Map {A => 20, B => 114, C => 50, W => 0};


// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]

  
// b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// c = ["A", "B", "C", "W"]


  