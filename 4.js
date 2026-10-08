//4. 3 let variables, 2 arrays, 1 loop, and 2 conditionals

let total = 0;      // Let variable 1: tracks total value
let passCount = 0;  // Let variable 2: tracks passed scores
let failCount = 0;  // Let variable 3: tracks failed scores

let scores1 = [80, 40]; // Array 1: initial set of scores
let scores2 = [90, 50]; // Array 2: second set of scores

// Loop (for...of): Iterates through combined elements of both arrays
for (let score of [...scores1, ...scores2]) {
  // Conditional 1: Checks if student passed
  if (score >= 75) {
    passCount++;
  // Conditional 2: Checks if student failed
  } else if (score < 75) {
    failCount++;
  }
}

// Display final evaluation
console.log("Passed: ", passCount, "Failed: ",failCount);

