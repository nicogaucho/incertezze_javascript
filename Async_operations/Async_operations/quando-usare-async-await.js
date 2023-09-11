import fs from "fs"; // only in modules
// const fs = require('fs'); also in .js files 

fs.promises.readFile('app.mjs', 'utf-8')
  .then((file) => {
    console.log(file)
  })
  .catch((error) => {
    console.error(error)
  })

// transform this in async await... 

// put in async function... also in .js files 
async function readTheFile() {
  const data = await fs.promises.readFile('app.mjs', 'utf-8')
  console.log(data);  
}

// readTheFile();

// to level await... only in modules
const data = await fs.promises.readFile('app.mjs', 'utf-8')
// console.log(data);


// to catch error as well, you have to use async function with try catch 
async function readTheFile() {
  try {
    const data = await fs.promises.readFile('app.mjs', 'utf-8')
    console.log(data);  
  } catch (error) {
    console.error(error)    
  }
}
