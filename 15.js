//15. 2 object literals, use the spread operator on objects, and have 2 arrow functions

const obj1 = { a: 1 }; // Object Literal 1
const obj2 = { b: 2 }; // Object Literal 2

// Spread Operator (...) merges object properties into a combined object
const merged = { ...obj1, ...obj2 };

const getA = () => merged.a; // Arrow Function 1: accesses spread property 'a'
const getB = () => merged.b; // Arrow Function 2: accesses spread property 'b'

// Output values
console.log(getA());
console.log(getB());

