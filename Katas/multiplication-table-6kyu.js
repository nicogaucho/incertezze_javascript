// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {

    // place to store final table 
    let table = [];
    for (let row = 1; row <= size; row++) {
        let rowArray = [];
        for (let col = 1; col <= size; col++) {
        rowArray.push(col * row)
        }
        table.push(rowArray);
    }

    return table;

}

console.log(
    multiplicationTable(3), 
    [[1,2,3], [2,4,6], [4,6,9]]
)
