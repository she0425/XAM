//30. 2 loops, 2 conditionals, 1 array, and 3 let variables

let i = 0;          // Let variable 1
let sum = 0;        // Let variable 2
let flag = true;    // Let variable 3
const nums = [10, 20]; // 1 Array

// Loop 1 (for...of loop)
for (let n of nums) {
  // Conditional 1: process score only if flag is true
  if (flag) sum += n;
}

// Loop 2 (while loop)
while (i < 1) {
  // Conditional 2: increment iteration counter if total sum is positive
  if (sum > 0) i++;
}

console.log(`Sum: \({sum}, i:\){i}`);

