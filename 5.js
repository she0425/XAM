//5. 2 object literals, 2 destructured objects, and use optional chaining


// Object Literal 1 with nested property
const user1 = { name: "Alice", address: { city: "NYC" } };
// Object Literal 2 missing nested address property
const user2 = { name: "Bob" };

// Destructured Object 1: extracts name property into 'name1'
const { name: name1 } = user1;
// Destructured Object 2: extracts name property into 'name2'
const { name: name2 } = user2;

// Optional chaining (?.) safely reads nested city without throwing error if address is missing
console.log(name1, user1.address?.city);
console.log(name2, user2.address?.city);