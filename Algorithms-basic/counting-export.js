let scores = [55, 63, 10, 40, 61, 70, 80];

// contare i voti superiori a 60 e incrementare lo stato di granted. 

/* DO IT WITH FOR LOOP COUNTER */
let passed = 0; 

for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];
    if (currentScore > 60) {
        passed = passed + 1
    }
}

console.log(passed)



/* DO IT WITH FUNCTION */
function grantedExams(scoresValues) {
    let granted = 0; 
    for (let i = 0; i < scoresValues.length; i++) {
        if (scoresValues[i] >= 60) {
            granted += 1;
        } 
    }
    return granted;
}

console.log(grantedExams(scores));



/* DO IT WITH HIGH-ORDER-METHOD ARRAY REDUCE */
let granted = scores.reduce((acc, score) => {
    score >= 60 ? acc += 1 : acc;
    return acc; 
}, 0);

console.log(granted);