//1. 2 classes, 4 methods, and must implement inheritance

// Base class (Class 1)
class Animal {
  // Method 1: Defines a basic eating behavior
  eat() { return "Eating"; }
  // Method 2: Defines a basic sleeping behavior
  sleep() { return "Sleeping"; }
}

// Child class (Class 2) inheriting from Animal using 'extends'
class Dog extends Animal {
  // Method 3: Defines a dog-specific barking behavior
  bark() { return "Barking"; }
  // Method 4: Defines a dog-specific running behavior
  run() { return "Running"; }
}

// Instantiate child object to access inherited & own methods
const myDog = new Dog();
console.log(myDog.eat());   // Calling inherited Method 1
console.log(myDog.sleep()); // Calling inherited Method 2
console.log(myDog.bark());  // Calling own Method 3
console.log(myDog.run());   // Calling own Method 4