function findMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return {max, min};
  }
  
  // Example usage:
  const array = [5, 2, 7, 1, 9];
  const result = findMinMax(array);
  console.log(`Maximum value: ${result.max}`);
  console.log(`Minimum value: ${result.min}`);
  // Output: Maximum value: 9
  //         Minimum value: 1
  