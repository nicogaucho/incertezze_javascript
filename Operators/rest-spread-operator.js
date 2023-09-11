// REST OPERATOR... considera tutto cio che resta da una lista di valori e lo include in un array

function somma(a, ...parametri) {
  let sum = a;
  for (let i = 0; i < parametri.length; i++) {
    sum += parametri[i]
  }
  return sum
}; 

// console.log(somma(2, 3, 6, 7, 8))

// SPREAD OPERATOR... estrapola tutti gli elementi da una struttura dati, considerandoli individualmente... 
// strumento che mi consente di creare delle copie... 

const x = [1, 3, 5, 8]; 

// voglio copiare la struttura e aggiornare l'array con un nuovo elemento... 
// creo la copia...
// const copy = x.slice(); 
// aggiorno... 
// copy.splice(copy.length - 1, , 10);

// console.log(x, copy)

const cp = [
  ...x, 
  x[x.length - 1] = 10
]; 

// console.log(x, cp)

// Con gli oggetti... 

const user = {
  id: 0, 
  name: "Nico", 
  email: "a@a.com"
};

const cpUser = {
  ...user, 
  name: "Antonio", 
  phone: "339229393"
}

console.log(user, cpUser)