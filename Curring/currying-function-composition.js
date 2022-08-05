
const double = x => x * 2
const getLength = string => string.length

const map = (collection, fn) => collection.map(fn)

const messages = ['Hello','Bye']

const doubleLengths = map(map(messages, getLength), double)

console.log(doubleLengths);



