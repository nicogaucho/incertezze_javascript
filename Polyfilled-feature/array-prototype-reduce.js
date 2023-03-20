// caniuse.com tells with methods is supported in broswer version, so let's polyfill array.prototype.reduce to be able to use it in latest version of IE browser

/* [1,2,3].reduce((acc,n) => {

}, 0); */
 
function polyfillReduce(callback, initialValue) {
    let accumulator; 
    let start = 0;
    if (initialValue) {
        accumulator = initialValue;
    } else {
        accumulator = this[0];
        start = 1;
    }
    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator;
} 

// override proto chain reduce method
// Array.prototype.reduce = polyfillReduce;

[1,2,3].polyfillReduce((acc, number) => acc + number, 0)

