//11. 2 destructured arrays, 2 destructured objects, and 3 arrow functions

const getArray = () => [1, 2];            // Arrow Function 1: returns array
const getObject = () => ({ x: 10, y: 20 });// Arrow Function 2: returns object
const identity = v => v;                  // Arrow Function 3: returns value untouched

// Destructured Array 1: extracts values into variables 'a' and 'b'
const [a, b] = getArray();
// Destructured Array 2: extracts values into variables 'c' and 'd'
const [c, d] = [3, 4];

// Destructured Object 1: extracts properties 'x' and 'y'
const { x, y } = getObject();
// Destructured Object 2: extracts properties 'name' and 'age'
const { name, age } = { name: "Alex", age: 25 };

// Output all destructured values
console.log(identity([a, b, c, d, x, y, name, age]));