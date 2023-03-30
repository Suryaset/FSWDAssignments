function filterByCategory(products) {
  // Define a function to be returned
  return function(category) {
    // Use the filter() method to create a new array of products with the given category
    return products.filter(product => product.category === category);
  }
}

// Example usage:
const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "sunglasses", category: "Accessories" },
];

const clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts); 

const accessoriesProducts = filterByCategory(products)("Accessories")
console.log(accessoriesProducts);  //Please Press [CTRL] +[ / ] to run this Code
