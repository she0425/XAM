//16. 3 classes, implement inheritance and polymorphism, and have 3 object instances

// Parent Class (Class 1)
class Animal {
  speak() { return "Generic sound"; }
}

// Child Class 1 (Class 2) inheriting via extends
class Dog extends Animal {
  // Polymorphism: Method overriding parent speak() implementation
  speak() { return "Woof"; }
}

// Child Class 2 (Class 3) inheriting via extends
class Cat extends Animal {
  // Polymorphism: Method overriding parent speak() implementation
  speak() { return "Meow"; }
}

// Object Instance 1
const a = new Animal();
// Object Instance 2
const d = new Dog();
// Object Instance 3
const c = new Cat();

// Display polymorphic method responses
console.log(a.speak());
console.log(d.speak());
console.log(c.speak());