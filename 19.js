//19. 2 arrays, 2 destructured arrays, and 2 template literals

const list1 = [1, 2];    // Array 1
const list2 = ["A", "B"]; // Array 2

// Destructured Array 1: assigns values to 'num1' and 'num2'
const [num1, num2] = list1;
// Destructured Array 2: assigns values to 'char1' and 'char2'
const [char1, char2] = list2;

// Template Literal 1
const msg1 = `Number: ${num1}`;
// Template Literal 2
const msg2 = `Letter: ${char1}`;

console.log(msg1);
console.log(msg2);

