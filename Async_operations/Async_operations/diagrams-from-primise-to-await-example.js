// facciamo una chiamata API e con la response un altra chiamata API 

function response(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 1000);
    })
}

// dato che abbiamo una function che ritorna una promise posso usare .then()

response(2)
        .then(res1 => {
            console.log(res1)
            response(res1)
                    .then(res2 => {
                        console.log(res2)
                    })
        })



// USAGE OF SYNTAXIS SUGAR 

async function fn () {

    // first function added to the queue 
    const res1 = await response(2)

    // second function added to the queue
    const res2 = await response(res1)

    // print final result 
    console.log(res2)
}

// calling function 
fn()