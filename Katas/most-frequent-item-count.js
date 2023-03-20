// Scrivere una funzione che prenda in ingresso un array di numeri e calcoli il numero di occorrenze di ogni numero e ritorni il valore con il maggior numero di occorrenze. Se il risultato non contiene nessuna occorrenza, ritornare 0.

// example => mostFrequencyCount([3, -1, -1, -1, 3, 2, -1])   
// result => -1

function mostFrequencyCount(array) {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // multiple way to check property in object 
        // if (Object.hasOwnProperty(counts, item))
        // if (Object.hasOwn(counts, item))
        if (counts[item]) {
            counts[item] += 1;
        } else {    
            counts[item] = 1;
        }
    }
    if (Object.keys(counts).length == 0) return 0;
    console.log(counts);
    // BEFORE USING SPREAD OPERATOR WE USED APPLY METHOD 
        // const maxValue = Math.max.apply(Math, Object.values(counts));
    const maxValue = Math.max(...Object.values(counts));
    console.log(maxValue)
    return Object.keys(counts).find(item => counts[item] == maxValue)
}



// multiple way to solve this kata 
function mostFrequencyCount(array) {
    const counts = new Map();
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (counts.get(item)) {
            counts.set(item, (counts.get(item)) + 1)
        } else {
            counts.set(item, 1)
        } 
    }

    console.log(counts);
    const maxValue = Math.max(...counts.values())
    console.log(maxValue);
    return [...counts.keys()].find(key => counts.get(key) == maxValue)
}

// uso con reduce
function mostFrequencyCount(array) {
    const result = array.reduce((counts, item)  => {
        counts.get(item) ? counts.set(item, (counts.get(item)) + 1) : counts.set(item, 1)
        return counts;
    }, new Map())
    const maxValue = Math.max(...result.values())
    return [...result.keys()].find(key => result.get(key) == maxValue)
}


console.log(mostFrequencyCount(
    [3, -1, -1, -1, 3, 2, -1, 2, 2, 2, 2, 2]
));

console.log(mostFrequencyCount(
    [2, 5, 5, 5, 6, 1, 2, 6, 5]
));

console.log(mostFrequencyCount(
    []
));