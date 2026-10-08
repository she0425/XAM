//17. 3 let variables, 3 conditionals, and 2 loops

let x = 10; // Let variable 1
let y = 5;  // Let variable 2
let z = 0;  // Let variable 3

// Loop 1: For loop running twice
for (let i = 0; i < 2; i++) {
  // Conditional 1: Checks if x is greater than 5
  if (x > 5) z++;
}

// Loop 2: While loop running while y is greater than 0
while (y > 0) {
  // Conditional 2: Checks if y equals 5
  if (y === 5) z++;
  // Conditional 3: Checks if y is under 5
  else if (y < 5) z--;
  y--;
}

console.log(`Final Z value: ${z}`);