//18. 1 class, implement encapsulation, 2 methods, and use optional chaining

class Vault {
  #pin = "0000"; // Encapsulation: Private property
  
  // Method 1: Accessor for private field
  getPin() { return this.#pin; }
  
  // Method 2: Uses optional chaining (?.) to safely traverse dynamic nested structure
  readSecret(data) { return data?.secret?.value; }
}

const v = new Vault();
console.log(v.getPin());
// Test optional chaining with defined target structure
console.log(v.readSecret({ secret: { value: "TopSecret" } }));
