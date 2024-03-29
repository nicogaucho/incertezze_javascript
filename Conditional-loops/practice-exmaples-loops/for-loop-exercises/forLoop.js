// Exercises with solution

// #1 — Print the numbers from 0 to 15

// Solution

for (var i = 0; i <= 15; i++) {
   console.log("Value of i is: " + i);
}

// #2 — Print the numbers from 12 to 24

// Solution

for (var i = 12; i <= 24; i++) {
        console.log("Value of i is: " + i);
}

// #3 — Print the ODD numbers from 7 to 31

// Solution

for (var i = 7; i <= 31; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}


// #4 — Print the EVEN numbers from 10 to -20

// Solution

for (var i = 10; i >= -20; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}


// #5 — Iterate through all numbers from 1 to 45. Print the following:

// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz”
// Solution

for (var i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}
