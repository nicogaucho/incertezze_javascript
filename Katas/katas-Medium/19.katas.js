// [ 1,1,2,8,6,3,7,5,4 ] == [[1,1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8] ] == 3

function getLength(arr) {

  let sorted = arr.sort((a,b) => a - b)
  
  sorted.reduce( (acc , n) => {

    let first = sorted.filter(el )
    console.log(first);
  }, [])
  

}

console.log(getLength([1, 1, 2, 8, 6, 3, 7, 5, 4]));