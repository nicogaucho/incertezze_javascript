// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.


function checkExam(array1, array2) {
    // a place to store the score
    let score = 0; 
    // iterate over array1
    for (let i = 0; i < array1.length; i++) {
        // if value in array2 is not a empty string (blank answer)
        if (array2[i] !== '') {
            // if value in array1 is === value array2 increase score +4 
            // if value in array1 is !== value array2 descrese score -1
            if (array1[i] === array2[i]) {
                score += 4;
            } else {
                score -= 1;
            }
        }    
    }
    // if score < 0 set score to 0 
    if (score < 0) {
        score = 0;
    } 
    // return score 
    return score;
}


// try with reduce or forEach

function checkExam(array1, array2) {
    return array1.reduce((score, value, i) => {
            if (array2[i] !== '') {
                if (value === array2[i]) {
                    score += 4;
                } else {
                    score -= 1;
                }
            }
            if (score < 0) return 0;
            return score;  
        }, 0);
}


console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  

