// Es una estructura datos aun mas potente del objeto en si. Ideal para crear colecciones de datos, incluso evalua cualquier tipo de dato como key and value respecto a los objetos que evaluan solo string como claves

// mas performante, iterable, no puedo bypasar con su prototype, key ordenadas por inserciones 
let map = new Map([['key 1', 1], ['key 2', 2]])



const key = {type: "links", series: "numeric"};
const value = ["link 01", "link 02", "link 03", "link 04"];

const data = new Map();
// setto i valori con le chiavi 
data.set(key, value)
// {type: "links", series: "numeric"} => ["link 01", "link 02", "link 03", "link 04"]

// ottengo le chiavi 
console.log(data.get(key))

// pulire un map 
// data.clear()


