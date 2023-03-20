// vecchia modalitá di ottenere risorse 

/* const req = new XMLHttpRequest();
req.open('GET', 'https://dog.ceo/api/breeds/image/random/3')
req.send()
req.addEventListener('load', () => {
    console.log(req.responseText)
}); */

// otteniamo una risposta in stringa, il nuovo formato mappato come un oggetto js deve essere JSON
// quindi a questo punto io posso parsare la risposta in JSON 

import { giveStyleToData } from '/app.js';

const req = new XMLHttpRequest();
req.open('GET', 'https://dog.ceo/api/breeds/image/random/3')
req.send()
req.addEventListener('load', () => {
    const json = JSON.parse(req.responseText);
    console.log(json)
    const data = json.message  
    // giveStyleToData(data)
});
