//24. 2 classes, implement abstraction and inheritance, and have 2 methods

// Abstract Parent Class (Class 1)
class Device {
  // Method 1: Abstract interface placeholder
  turnOn() { throw new Error("Abstract method"); }
}

// Derived Class (Class 2) inheriting abstract contract
class Phone extends Device {
  // Method 1 Implementation: concrete turnOn behavior
  turnOn() { return "Phone ON"; }
  // Method 2: Concrete specialized feature
  call() { return "Calling"; }
}

const p = new Phone();
console.log(p.turnOn());
console.log(p.call());

