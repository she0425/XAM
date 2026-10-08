//13. 2 arrays using .map(), 1 array using .filter(), and 3 arrow functions

const double = x => x * 2;       // Arrow Function 1
const addOne = x => x + 1;       // Arrow Function 2
const isEven = x => x % 2 === 0; // Arrow Function 3

// Array 1 using .map() to double each value
const mapped1 = [1, 2].map(double);
// Array 2 using .map() to increment each value
const mapped2 = [3, 4].map(addOne);
// Array using .filter() to keep only even numbers
const filtered = [1, 2, 3, 4].filter(isEven);

// Display output
console.log(mapped1);
console.log(mapped2);
console.log(filtered);