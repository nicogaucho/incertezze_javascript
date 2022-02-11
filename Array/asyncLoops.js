// why is differnt use for loop instead of forEach loop 
 
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function getData() {
  const letters = ['a', 'b', 'c'];
  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
    // await to resove promise each for loop 🤓 
    await sleep(1000)
  }  

  // with forEach he doesn't care about resolving promise to execute the loop 🤯
  letters.forEach( async (el) => { 
    console.log(el); 
    await sleep(1000);
  })
}

getData();

