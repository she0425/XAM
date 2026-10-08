//25. 1 array using .filter(), 2 conditionals, and 3 let variables


let threshold = 10; // Let variable 1
let status = "";    // Let variable 2
let count = 0;      // Let variable 3

// Filter array values keeping elements exceeding threshold
const filtered = [5, 12, 18].filter(n => n > threshold);

// Conditional 1: Checks if elements were matched
if (filtered.length > 0) status = "Found";
// Conditional 2: Checks if status string matches expected criteria
if (status === "Found") count = filtered.length;

console.log(`Status: \({status}, Count:\){count}`);