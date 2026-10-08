//10. 3 classes, implement abstraction, and have 4 methods

// Base class (Class 1) defining abstract interface
class Shape {
  // Method 1: Abstract method enforced by throwing error if unfulfilled
  draw() { throw new Error("Abstract method"); }
}

// Derived class (Class 2)
class Circle extends Shape {
  // Method 2: Implementation of abstract draw method
  draw() { return "Circle drawn"; }
  // Method 3: Additional concrete method
  getArea() { return 3.14; }
}

// Derived class (Class 3)
class Square extends Shape {
  // Method 4: Implementation of abstract draw method
  draw() { return "Square drawn"; }
}

// Execute implementations
const c = new Circle();
const s = new Square();
console.log(c.draw());
console.log(c.getArea());
console.log(s.draw());