//26. 1 class, 3 methods, 2 object instances, and 3 template literals

class Student {
  constructor(name, score) { this.name = name; this.score = score; }
  // Method 1 using Template Literal 1
  getName() { return `Name: ${this.name}`; }
  // Method 2 using Template Literal 2
  getScore() { return `Score: ${this.score}`; }
  // Method 3 using Template Literal 3
  getReport() { return `Report: \({this.name} got\){this.score}`; }
}

// Object Instance 1
const s1 = new Student("Alice", 90);
// Object Instance 2
const s2 = new Student("Bob", 85);

// Invoke methods on instances
console.log(s1.getName());
console.log(s1.getScore());
console.log(s2.getReport());

