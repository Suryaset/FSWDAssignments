function doubleArray(arr, callback) {
  const doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(callback(arr[i]));
  }
  return doubledArr;
}
// To use this function, we would pass in an array and a callback function as follows:

const myArray = [1, 2, 3, 4];
const doubledArray = doubleArray(myArray, (num) => {
  return num * 2;
});
console.log(doubledArray); 
