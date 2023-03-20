// variable declared globally in module scope, it works everywhere we are calling it, even if we are calling it in a function
const nome = "NICO";

function sayHello() {
    console.log(nome);

    // still can access inside a block 
    if (true) {
        console.log(nome);
    }
}

// what if i move variable declaration here, will wokrsP=
// const nome = "NICO";

sayHello();