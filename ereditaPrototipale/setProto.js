const grandFather = {
  'name': 'john',
  'surname': 'smith'
};

const father = {
  'name': 'jimmy'
};

const son = {
  'name': 'joe'
};

Object.setPrototypeOf(father, grandFather) // set come prototipo di father, granfather 
Object.setPrototypeOf(son, father) // set come prototipo di son, father 

console.log(son.surname); // 'smith'
console.log(son.name); // 'joe'


// property lookup, guarda i prototipi fino a trovare il metodo o la property che si intende applicare andando nei prototipi di riferiemnto 


let arr = [1, 2, 3];
console.log(arr._proto_ === Array.prototype); // true
console.log(arr._proto_._proto_ === Object.prototype); // true
console.log(arr._proto_._proto_._proto_ === null);  // true


