function sortSequence(sequence){

    // cpy of the arr
    const cpSequence = sequence.slice();

    console.log(cpSequence);

    let a = [];

    for (let i = 0; i < cpSequence.length; i++) {
      
      const currentSlicingIndex = 0;
 
      let currentSubSeq = cpSequence.slice(currentSlicingIndex, cpSequence.indexOf(0) + 1);

      let remove = cpSequence.splice(currentSlicingIndex, cpSequence.indexOf(0) + 1);

      console.log(remove);
      
      
    }


    

} 

/* const sortSequence = (arr) => {
    
    const cpyArr = arr.slice();
    // object
    let sortedSubArrays = [];
    // loop through the array
    for (let i = 0; i < cpyArr.length; i++) {
        let currentSubSeq;
        // split on first occurence of zero
        const currentSlicingIndex = 0;
        // slice it
        currentSubSeq = cpyArr.slice(currentSlicingIndex, cpyArr.indexOf(0) + 1);
        // splice to delete
        cpyArr.splice(currentSlicingIndex, cpyArr.indexOf(0) + 1);
        // slice and sort to get the desired sub arr
        currentSubSeq = currentSubSeq
            .slice(0, currentSubSeq.length - 1)
            .sort((a, b) => a - b);
        // push 0
        currentSubSeq.push(0);
        // reduce to get current sum ofthe sub arr
        const currentSum = currentSubSeq.reduce((acc, num) => acc + num);
        // store it in an object - sum,arr
        // push an object with sum and current sub arr info
        sortedSubArrays.push({
            sum: currentSum,
            arr: currentSubSeq,
        });
    }
    // sort the arr based on sum
    sortedSubArrays = sortedSubArrays.sort((a, b) => a.sum - b.sum);
    // flatMap to get the desired output
    const resArr = sortedSubArrays.map((obj) => obj.arr).flat(1);
    return resArr;
};
*/



console.log(sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]));




