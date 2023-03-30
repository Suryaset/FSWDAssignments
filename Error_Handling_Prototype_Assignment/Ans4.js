class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee('Samay','Event-Coordinator',50000)
console.log(employee1.getSalary())