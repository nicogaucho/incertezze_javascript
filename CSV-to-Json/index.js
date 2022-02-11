// lettura del file con fs npm package
const fs = require("fs");
csv = fs.readFileSync("feedback.csv");

/* // converti i dati in string e splittali in un array 
var array = csv.toString().split("\r");

// tutte le righe del csv saranno convertite in json, che sará aggiunto come risultato in un array 
let result = [];

// l'array[0] contiene tutte le colonne header e le salviamo in un array header  
let headers = array[0].split(", ") */

/* // una volta che abbiamo separato de colonne header iteriamo sulle restanti 
for (let i = 1; i < array.length - 1; i++) {
let obj = {}

// creamo un oggetto vuoto e dopo aggiungiamo i valori della colonna, dichiariamo una str con il valore  corrente dell'array 
// Create an empty object to later add
// values of the current row to it
// Declare string str as current array
// value to change the delimiter and
// store the generated string in a new
// string s
let str = array[i]
let s = ''

// By Default, we get the comma separated
// values of a cell in quotes " " so we
// use flag to keep track of quotes and
// split the string accordingly
// If we encounter opening quote (")
// then we keep commas as it is otherwise
// we replace them with pipe |
// We keep adding the characters we
// traverse to a String s
let flag = 0
for (let ch of str) {
	if (ch === '"' && flag === 0) {
	flag = 1
	}
	else if (ch === '"' && flag == 1) flag = 0
	if (ch === ', ' && flag === 0) ch = '|'
	if (ch !== '"') s += ch
}

// Split the string using pipe delimiter |
// and store the values in a properties array
let properties = s.split("|")

// For each header, if the value contains
// multiple comma separated data, then we
// store it in the form of array otherwise
// directly the value is stored
for (let j in headers) {
	if (properties[j].includes(", ")) {
	obj[headers[j]] = properties[j]
		.split(", ").map(item => item.trim())
	}
	else obj[headers[j]] = properties[j]
}

// Add the generated object to our
// result array
result.push(obj)
} */

var lines = csv.toString().split("\n")
console.log(lines);


var result = []
var headers = lines[0].split(",")

lines.map(function(line, indexLine){
  if (indexLine < 1) return // Jump header line

  var obj = {}
  var currentline = line.split(",")

  headers.map(function(header, indexHeader){
    obj[header] = currentline[indexHeader]
  })

  result.push(obj)
})

result.pop() // remove the last item because undefined values
              
// Convert the resultant array to json and
// generate the JSON output file.
let json = JSON.stringify(result);
fs.writeFileSync('output.json', json);

