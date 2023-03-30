function removeDuplicates(numbers) {
    return new Set(numbers);
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
  // Output: Set(6) { 1, 2, 3, 4, 5, 6 }
  