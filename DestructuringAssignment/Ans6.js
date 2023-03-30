function extractPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  // Example usage:
  const person = {
    name: 'Mithun',
    age: 21,
    address: {
      street: 'B8, Block-B, Industrial Area.',
      city: 'Sector 62,Noida',
      state: 'Uttar Pradesh',
    }
  };
  const result = extractPersonInfo(person);
  console.log(`Name: ${result.name}`);
  console.log(`Street: ${result.street}`);
