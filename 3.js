//3. 2 classes, 2 object instances, and implement encapsulation and polymorphism

// Base class (Class 1)
class Account {
  #balance = 100; // Encapsulation: Private field protected from external access
  // Public method providing controlled access to private state
  getDetails() { return `Balance: $${this.#balance}`; }
}

// Subclass (Class 2) inheriting from Account
class Savings extends Account {
  // Polymorphism: Overriding getDetails() to customize behavior
  getDetails() { return `Savings ${super.getDetails()}`; }
}

// Object Instance 1 of base class
const acc1 = new Account();
// Object Instance 2 of derived class
const acc2 = new Savings();

// Output responses demonstrating polymorphic behavior
console.log(acc1.getDetails());
console.log(acc2.getDetails());