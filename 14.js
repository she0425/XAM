//14. 4 const variables, 1 array, 2 loops, and 3 template literals

const tag = "Score";       // Const variable 1
const prefix = "Student";  // Const variable 2
const suffix = "Points";   // Const variable 3
const scores = [80, 90];   // Const variable 4 holding 1 array

// Loop 1 (for loop): Uses Template Literal 1 to format index output
for (let i = 0; i < scores.length; i++) {
  console.log(`\({prefix}\){i}`);
}

// Loop 2 (for...of loop): Uses Template Literals 2 & 3 to format array elements
for (const s of scores) {
  console.log(`\({tag}:\){s} ${suffix}`);
}