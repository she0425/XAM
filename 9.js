//9. 2 arrays, use the spread operator on arrays, and have 1 loop
const arr1 = [1, 2]; // Array 1
const arr2 = [3, 4]; // Array 2

// Spread Operator (...) merges both arrays into a single new array
const combined = [...arr1, ...arr2];

// Loop through each element of the spread array
for (let i = 0; i < combined.length; i++) {
  console.log(combined[i]);
}