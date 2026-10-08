//28. 2 object literals, use the spread operator on objects, and use optional chaining

const part1 = { id: 1, info: { name: "Alpha" } }; // Object Literal 1
const part2 = { category: "A" };                   // Object Literal 2

// Spread Operator (...) shallow merges object properties
const combined = { ...part1, ...part2 };

// Optional Chaining (?.) safely checks nested 'info' object property
console.log(combined.info?.name);