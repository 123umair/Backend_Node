// Inheritance,super(),
class Parent {
  constructor(name, address, age) {
    this.name = name;
    this.address = address;
    this.age = age;
  }
  location() {
    console.log("This is the location", this.address);
  }
}

class child extends Parent {
  // Define constructor parameters in a logical order
  constructor(F_name, F_address, F_age, gender) {
    // Pass arguments to the Parent constructor in the correct order: name, address, age
    super(F_name, F_address, F_age);
    this.gender = gender;
  }
}

// Example usage of the corrected classes:
const ParentDetail = new Parent("zyz", "Bannucity", 60);
ParentDetail.location(); // Output: This is the location Bannucity

// Create a child instance
const ChildDetail = new child("Alice", "Someville", 40, "Male");
ChildDetail.location(); // Output: This is the location Someville
