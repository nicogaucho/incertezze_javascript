// scrivi una funzione che calcoli l'algortimo di collatz 

function collatz(n) {
    while (n > 1) {
        if (n % 2 == 0) {
            n /= 2
            console.log(n)
        } else {
            n = n * 3 + 1
            console.log(n) 
        }
    }
}
collatz(10)

