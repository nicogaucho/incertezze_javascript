// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// 1 level = 1 beer
// 2 level = 4 beers 
// 3 level = 9 beers
// 4 level = 16 beers 
// 5 level = 25 beers 
// 6 level = 36 beers 
// 7 level = 49 beers 
// 8 level = 64 beers 
// 9 level = 81 beers 
// 10 level = 100 beers 
// 11 level = 121 beers 
// 12 level = 144 beers 
// 13 level = 169 beers 



// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
  // ☝🏻 tot beers you can buy is 750 
// start level == 1 
// while tot beer > 0 
    // sottrai da tot beers il quandrato del current level 
    // increamenta il level by 1 
// return level 


// beeramid(5000, 3); // should === 16

// Returns number of complete beeramid levels
function beeramid(bonus, price) {
  
}


console.log(beeramid(9, 2), 1);
console.log(beeramid(10, 2), 2);
console.log(beeramid(11, 2), 2);
console.log(beeramid(21, 1.5), 3);
console.log(beeramid(454, 5), 5);
console.log(beeramid(455, 5), 6);
console.log(beeramid(4, 4), 1);
console.log(beeramid(3, 4), 0);
console.log(beeramid(0, 4), 0);
console.log(beeramid(-1, 4), 0);
