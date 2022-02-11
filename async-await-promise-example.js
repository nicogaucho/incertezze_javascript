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

outputFile('/Users/nico/wa/incertezze/README.md')
  .then(() => {
    console.log('we are ready to go 🌈');
  });


