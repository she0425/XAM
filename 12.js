//12. 2 classes, implement encapsulation, 2 methods, and 1 conditional

// Parent Class (Class 1)
class User {
  #password = "1234"; // Encapsulation: Private property unreachable outside
  // Method 1: Validates login attempt internally
  verify(input) {
    // Conditional 1: Checks if input matches private field
    if (input === this.#password) return true;
    return false;
  }
}

// Subclass (Class 2)
class Admin extends User {
  // Method 2: Returns role label
  getRole() { return "Admin"; }
}

const admin = new Admin();
console.log(admin.verify("1234")); // Pass verification test
console.log(admin.getRole());       // Print role
