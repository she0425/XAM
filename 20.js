//20. 4 arrow functions, 4 template literals, and 2 const variables

const user = "Alex";  // Const variable 1
const role = "Admin"; // Const variable 2

// Arrow Function 1 + Template Literal 1
const f1 = () => `User: ${user}`;
// Arrow Function 2 + Template Literal 2
const f2 = () => `Role: ${role}`;
// Arrow Function 3 + Template Literal 3
const f3 = () => `Info: \({user}-\){role}`;
// Arrow Function 4 + Template Literal 4
const f4 = () => `Status: Active`;

// Output all evaluations
console.log(f1());
console.log(f2());
console.log(f3());
console.log(f4());