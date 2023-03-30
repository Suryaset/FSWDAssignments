class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

let calculator = new Calculator();
let result = calculator.constructor.add(10,25);

console.log(result);