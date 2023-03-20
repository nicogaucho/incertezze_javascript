// look example usage of this keyword 

// this rappresent the object where the functions gets created 

// FOR EXAMPLE 

const obj = {
    name: 'ng', 
    fn : function() {
        console.log(this.name)
    }
}

obj.fn()


// with arrow function, example below => return undefined 


const objeto = {
    nombre: 'ng', 
    funcion() {
        return () => console.log(this.nombre)
    }
}

const generateFn = objeto.funcion()

generateFn()

// what's is happening? 


