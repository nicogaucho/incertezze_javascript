// passing a target as the first parameter, the parameter will shallow copy the object that we pass a second parameter 

// example 1
let person = {};

Object.assign(person, {name: 'NG'});

//console.log(person);

// example 2, show that Object.create make a shallow copy, not a deep copy

let tio1 = { nombre: "Gemma" };

//console.log(tio1);

const tio2 = {
    nombre: "Nico",
    edad: 30, 
    peliculasFavoritas: [
        "starWars", 
        "Matrix", 
        "Interstellar", 
    ]
};

//console.log(tio2);

Object.assign(tio1, tio2);

// putting all properties into the new object called tio1

let newObject = Object.assign({}, tio1, tio2);

console.log(newObject);


//console.log(tio1);

//console.log(tio1.peliculasFavoritas === tio2.peliculasFavoritas);


// example 3 difference between spread operator 

const persona = { nombre: "Gemma" };

//console.log(persona);

const persona_tio = {
    nombre: "Nico",
    edad: 30, 
    peliculasFavoritas: [
        "starWars", 
        "Matrix", 
        "Interstellar", 
    ]
};

//console.log(persona_tio);

const p = {
    ...persona,
    ...persona_tio,
}

//console.log(p.peliculasFavoritas === persona_tio.peliculasFavoritas);

