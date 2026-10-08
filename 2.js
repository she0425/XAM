//2. 3 arrow functions, 2 arrays using .map(), and 3 template literals

// Arrow Function 1: Uses Template Literal 1 to double a number and format a string
const double = x => `Double: ${x * 2}`;
// Arrow Function 2: Uses Template Literal 2 to wrap a word in a string
const format = word => `Word: ${word}`;
// Arrow Function 3: Uses Template Literal 3 to greet a person by name
const greet = name => `Hello, ${name}`;

// Array 1 using .map() to transform each number with Arrow Function 1
const res1 = [1, 2].map(double);
// Array 2 using .map() to transform each string with Arrow Function 2
const res2 = ["a", "b"].map(format);

// Output results to terminal
console.log(res1);
console.log(res2);
console.log(greet("Alex"));