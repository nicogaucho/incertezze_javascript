// select element in html 
const imageElement = document.querySelector('#imageElement');

const loader = document.querySelector('#loader');

console.log(loader);

// random id endpoint 
const baseUrl = 'https://api.giphy.com/v1';
// stealing api_key from github == api.giphy.com/v1/randomId 
const api_key = 'Tne7LiT79HXXntOhyyXPzSDDuBAYMbJP';

const tags = [
  'nasa',
  'space X',
  'cocacola', 
  'dogs',
  'cats'
];

// function to get gift by tag random from array tags 
function getRandomTag() {
  let randomGif = Math.floor(Math.random() * tags.length);
  // return value in position index (0-6)
  return tags[randomGif]; 
} 

// get the function with syntax sugar 

  async function getRandomGif() {
    
    // add function to get gift by tag 
    const randomTag = getRandomTag();
    console.log(randomTag);
  
    const respose = await fetch(`${baseUrl}/gifs/random?api_key=${api_key}&rating=G&tag=${randomTag}`);
    const json = await respose.json();
    console.log(json);
  
    // create element html (img)
    const img = document.createElement('img')
    // set actribute src to data.image_url from json object
    img.src = json.data.image_url;
    imageElement.appendChild(img);

    loader.style.display = 'none';
  }
  
  getRandomGif();
  




