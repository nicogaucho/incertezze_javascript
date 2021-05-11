/* We are going to write a function called arrayDiff that will accept two arrays, a and b, as arguments.
You are given two arrays. The goal of the function is to remove all values in array a that is present in array b. The function should return the array after all the common values have been removed. 
*/


function arrayDiff(a, b) {
  let arr1 = [];
  if(b.length === 0 || a.length === 0){
    return a;
  }else{
    arr1 = a.filter(num => !(b.includes(num)) );
    return arr1;
  }
};



arrayDiff([], [4,5]) //output: []
arrayDiff([3,4], [3]) // output: [4]
arrayDiff([1,8,2], []) // output: [1, 8, 2]


