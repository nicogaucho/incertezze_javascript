import { giveStyleToData } from '/app.js';

fetch('https://dog.ceo/api/breeds/image/random/3')
.then((response) => {
    const json = response.json();
    return json; 
})
.then((json) => {
    console.log(json);
    const data = json.message
    // giveStyleToData(data)
})

// una cosa positiva di fetch non richede nessuna dipendenza di sviluppo o da scaricare, gia esiste nel linguaggio

// rispetto a axios dobbiare parsare la risposta manualmente, specificare che vogliamo il formato json per lavorarci con js