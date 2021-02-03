// cuando usar async/await ¿?

// cuando algo devuelve una promise! No puede existir una promise sin async/await

const fs = require('fs');

fs.promises.readFile('index.js', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  }); 

// se tu ves file con node.js index.js significa que hemos producido una promises y podemos usar async/await

// 1 necesitamos una async function 

// 2 craa await function encapsulando toda la logica del this 

async function readInFile() {
  try {
    const data = await fs.promises.readFile('index.js', 'utf-8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readInFile();