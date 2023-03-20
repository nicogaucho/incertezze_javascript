/* cd */

// if I run this code now, first node is going to run console.log because the promise is working behind the scenes ayncronusly 
//;
 
const fs = require('fs');
function outputFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, fileContents) => {
      if (error) {
        return reject(error);
      }
      console.log(fileContents);
      resolve();
    });
  })
}

outputFile('/Users/nicolagasparro/workspace/incertezze_javascript/README.md')
console.log('we are ready to go 🌈');

// soluzione con promise 

/* outputFile('/Users/nicolagasparro/workspace/incertezze_javascript/README.md')
  .then(() => {
    console.log('we are ready to go 🌈');
  }); */


