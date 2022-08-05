// object literal 
let prodotto = {
    nome: "aaa", 
    prezzo: 22, 
    venduto: false
}; 

// con constructores 
function Producto (nombre, precio, vendido, iva) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = vendido;
    this.iva = 1.21
    this.impuestos = function() {
        console.log(`total a pagar ${this.precio * this.iva}`)
    }
}

const prod1 = new Producto("aaa", 22, false);
const prod2 = new Producto("bbb", 11, false);

// metodos personalizados definendo funciones anonimas 
prod1.impuestos()
prod2.impuestos()



// constructores con uso de this usando un object literal
function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad   = literal.edad;
    this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });



// con Object.create()
let b = Object.create({})

