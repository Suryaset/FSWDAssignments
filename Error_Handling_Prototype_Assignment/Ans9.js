function numberChecker(arr) {
  // Define a function to be returned
  return function(num) {
    // Check if the number is in the array
    return arr.includes(num);
  }
}

// Example usage:
const myArr = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(myArr);
console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
