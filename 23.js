//23. 3 arrays, use the spread operator on arrays, and have 3 arrow functions

const a1 = [1]; // Array 1
const a2 = [2]; // Array 2
const a3 = [3]; // Array 3

// Spread Operator (...) concatenates three arrays into one
const combined = [...a1, ...a2, ...a3];

const getFirst = () => combined[0];  // Arrow Function 1
const getSecond = () => combined[1]; // Arrow Function 2
const getThird = () => combined[2];  // Arrow Function 3

console.log(getFirst(), getSecond(), getThird());