function extractElements(array) {
    const [first, second, ...extractRest] = array;
    const last = extractRest.pop();
    return [first, second, last];
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [first, second, last] = extractElements(array);
  console.log(`First element: ${first}`);
  console.log(`Second element: ${second}`);
  console.log(`Last element: ${last}`);
  // Output: First element: 1
  //         Second element: 2
  //         Last element: 5
  