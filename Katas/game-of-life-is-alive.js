const world = [
    [0, 0, 1], 
    [0, 1, 0], 
    [1, 0, 0], 
];

// const expectedAlive = [
//     {x: 1, y: 0}, 
//     {x: 1, y: 1}, 
//     {x: 1, y: 2}, 
// ];

// imperative programming 
// function isAliveCoordinates(world) {
//     let result = [];
//     for (let y = 0; y < world.length; y++) {
//         const row = world[y];
//         for (let x = 0; x < row.length; x++) {
//             const cell = row[x];
//             if (cell === 1) {
//                 result.push(
//                     {x: x, y: y}
//                 )
//             }
//         }
//     }
//     return result;
// }


// functional programming
function isAliveCoordinates(w) {
    return w.reduce((t, r, y)=>t.concat(r.reduce((t, c, x)=>t.concat((c==1)?[{x,y}]:[]),[])),[])
}

console.log(isAliveCoordinates(world));



