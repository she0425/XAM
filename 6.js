//6. 3 classes, 3 constructors, and implement inheritance

// Grandparent Class (Class 1)
class Vehicle {
  // Constructor 1
  constructor(brand) { this.brand = brand; }
}

// Parent Class (Class 2) inheriting from Vehicle
class Car extends Vehicle {
  // Constructor 2 calling parent constructor via super()
  constructor(brand, model) { super(brand); this.model = model; }
}

// Child Class (Class 3) inheriting from Car
class ElectricCar extends Car {
  // Constructor 3 expanding properties with super()
  constructor(brand, model, battery) { super(brand, model); this.battery = battery; }
}

// Instantiate fully inherited object and output to console
const myTesla = new ElectricCar("Tesla", "Model 3", "75kWh");
console.log(myTesla);

