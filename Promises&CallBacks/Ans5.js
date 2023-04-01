function greetWithName(name) {
  return new Promise((resolve, reject) => {
    if (name) {
      resolve(`Hello, ${name}!`);
    } else {
      reject('Please provide a valid name.');
    }
  });
}

greetWithName('Mithun')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));

greetWithName('')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error)); 