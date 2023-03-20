// https://www.codewars.com/kata/56582133c932d8239900002e
// DESCRIPTION:
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.


/* function mostFrequentItemCount(collection) {
    if (collection.length == 0) return 0;
    const count = collection.reduce((acc, n) => {
        Object.hasOwn(acc, n) ? acc[n] += 1 : acc[n] = 1
        return acc;
    }, {});
    return Math.max(...Object.values(count));
} */

function mostFrequentItemCount(collection) {
    if (collection.length == 0) return 0;
    return Math.max(...collection.reduce((map, n) => {
        map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1); 
        return map;
    }, new Map()).values());
}


console.log(mostFrequentItemCount([]), 0);
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]), 5);

