const items = {
    item1: 10, // USD
    item2: 25, // USD
    item3: 50, // USD
  };
  
  const exchangeRate = 80; // INR
  
  const convertedItems = Object.fromEntries(
    Object.entries(items).map(([item, price]) => [
      item,
      price * exchangeRate,
    ])
  );
  
  console.log(convertedItems);
  // Output: { item1: 800, item2: 2000, item3: 4000 }
  