// insert 10 values in array without using push method or loops
const collection = Array.from({length: 10}, (_,i) => {
    return i + 1;
})
console.log(collection);


