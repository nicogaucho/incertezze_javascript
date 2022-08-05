// JS is a model input/output no blocked
// JS is a single line treath 
// JS usege of queue to large operations 
// JS is a event callback oriented language

setTimeout(() => console.log('hello'), 2000)

// ESEMPIO OPERAZIONI ASINCRONE 
// CARS EXAMPLE di operazione async con setTimeout 

const cars = [ 
    { brand: "BMW", model: "x-123"  }, 
    { brand: "Fiat", model: "500" }
]

function showCars() {
    setTimeout(() => {
        cars.forEach(el => console.log(el.brand))
    }, 1000);
}


function insertCar(car) {
    setTimeout(() => {
       cars.push(car)
    }, 2000);
}


insertCar({ brand: "MASSERATI", model: "y-200"  })

showCars()


// ESEMPIO CON CALLBACK
// Regolarizzo la pila di funzioni con la callback, che si esegue dopo l'inserimento della car nell'array 


function showCars() {
    setTimeout(() => {
        cars.forEach(el => console.log(el.brand))
    }, 1000);
}

function insertCar(car, callback) {
    setTimeout(() => {
       cars.push(car)
       callback()
    }, 2000);
}

insertCar({ brand: "MASSERATI", model: "y-200"  }, showCars) 

// ESEMPIO CON PROMISE
// Possiamo usare la Promise build-in per controllare i processi async e alla risoluzione della promise eseguire il resto della logica 

function showCars() {
    setTimeout(() => {
        cars.forEach(el => console.log(el.brand))
    }, 1000);
}

function insertCar(car) {
    return new Promise((resolve, reject) => {
        setTimeout((error) => {
            if(error) {
                reject(error)
            }
            resolve(cars.push(car))
        }, 2000);
    })
}


insertCar({ brand: "MASSERATI", model: "y-200"  })
    .then(showCars)


// ESEMPIO CON ASYNC AWAIT
// ASYNC / AWAIT pero attenzione, si possono regolare le operazioni async con await se quello che sto mettendo in await mi ritorna una promise 


function showCars() {
    return new Promise((resolve, reject) => {
        setTimeout((error) => {
            if(error) {
                reject(error)
            }
            resolve(cars.forEach(el => console.log(el.brand)))
        }, 1000);
    })
 
}


function insertCar(car) {
    return new Promise((resolve, reject) => {
        setTimeout((error) => {
            if(error) {
                reject(error)
            }
            resolve(cars.push(car)) 
         }, 2000);
    })
}

async function get() {
    await insertCar({ brand: "MASSERATI", model: "y-200" })
    showCars()
}

get()