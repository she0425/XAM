//7. 2 arrays using .filter(), 3 arrow functions, and 2 const variables

const nums = [1, 2, 3, 4];       // Const variable 1
const words = ["a", "bb", "ccc"]; // Const variable 2

const isEven = n => n % 2 === 0;    // Arrow Function 1: predicate for even numbers
const isLong = w => w.length > 1;  // Arrow Function 2: predicate for long words
const log = val => val;            // Arrow Function 3: simple identity logger

// Array 1 filtered using predicate Arrow Function 1
const filteredNums = nums.filter(isEven);
// Array 2 filtered using predicate Arrow Function 2
const filteredWords = words.filter(isLong);

// Display filtered arrays
console.log(log(filteredNums));
console.log(log(filteredWords));