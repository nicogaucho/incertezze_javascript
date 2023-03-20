import { giveStyleToData } from '/app.js';

axios.get('https://dog.ceo/api/breeds/image/random/3')
.then((response) => {
    // handle success
    console.log(response);
    const data = response.data.message
    // giveStyleToData(data);
})
.catch((error) => {
    // handle error
    console.log(error);
});

// prima differenza rispetto al metodo XML http req è l'uso delle promise 

// se non conosco esattamente l'api con quale sto comunicando, gestisce automaticamente gli errori e mi permette capire cosa non sta funzionando.