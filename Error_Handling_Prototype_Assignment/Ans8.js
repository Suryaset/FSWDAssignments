// Create a prototype object called Student
function Student(name) {
  this.name = name;
}

// Add a method called printDetails to the prototype
Student.prototype.printDetails = function() {
  console.log(`Hello, the student is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const student = new Student("Mithun");

// Call the printDetails method on the Student object
student.printDetails(); // Output: "Hello, the student is Mithun"
