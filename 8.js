//8. 1 class, 3 object instances, 3 methods, and 2 template literals

class Product {
  constructor(name, price) { this.name = name; this.price = price; }
  // Method 1 using Template Literal 1
  getName() { return `Item: ${this.name}`; }
  // Method 2
  getPrice() { return `Price: $${this.price}`; }
  // Method 3 using Template Literal 2
  getDetails() { return `\({this.name} costs\)${this.price}`; }
}

// Object Instance 1
const p1 = new Product("A", 10);
// Object Instance 2
const p2 = new Product("B", 20);
// Object Instance 3
const p3 = new Product("C", 30);

// Execute methods and print results
console.log(p1.getName());
console.log(p2.getPrice());
console.log(p3.getDetails());