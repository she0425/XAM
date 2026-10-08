//22. 2 object literals, 2 destructured objects, and 2 template literals

const o1 = { title: "Book A" }; // Object Literal 1
const o2 = { title: "Book B" }; // Object Literal 2

// Destructured Object 1: extracts 'title' as 't1'
const { title: t1 } = o1;
// Destructured Object 2: extracts 'title' as 't2'
const { title: t2 } = o2;

// Template Literal 1
const msg1 = `Title 1: ${t1}`;
// Template Literal 2
const msg2 = `Title 2: ${t2}`;

console.log(msg1);
console.log(msg2);
