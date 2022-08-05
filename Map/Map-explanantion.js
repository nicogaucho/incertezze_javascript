// Es una estructura datos aun mas potente del objeto en si. Ideal para crear colecciones de datos, incluso evalua cualquier tipo de dato como key and value respecto a los objetos que evaluan solo string como claves

// mas performante, iterable, no puedo bypasar con su prototype, key ordenadas por inserciones 

const key = {type: "links", series: "numeric"};
const value = ["link 01", "link 02", "link 03", "link 04"];

const data = new Map();

data.set(key, value);

