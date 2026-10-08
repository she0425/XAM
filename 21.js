//21. 2 classes, 2 object instances, 1 array, and 1 loop

class User {}  // Class 1
class Admin {} // Class 2

const u = new User();  // Object Instance 1
const a = new Admin(); // Object Instance 2

// Array holding both instances
const list = [u, a];

// Loop through array elements to print instances
for (let item of list) {
  console.log(item);
}