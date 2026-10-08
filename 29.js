//29. 3 classes, implement polymorphism, and have 3 constructors

// Base Class (Class 1)
class Shape {
  // Constructor 1
  constructor(name) { this.name = name; }
  area() { return 0; }
}

// Subclass (Class 2)
class Circle extends Shape {
  // Constructor 2 calling super()
  constructor(r) { super("Circle"); this.r = r; }
  // Polymorphism: Calculates circle area specifically
  area() { return 3.14 * this.r * this.r; }
}

// Subclass (Class 3)
class Square extends Shape {
  // Constructor 3 calling super()
  constructor(s) { super("Square"); this.s = s; }
  // Polymorphism: Calculates square area specifically
  area() { return this.s * this.s; }
}

const c = new Circle(5);
const s = new Square(4);

console.log(c.area());
console.log(s.area());