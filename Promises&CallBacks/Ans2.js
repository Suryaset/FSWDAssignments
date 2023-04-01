function manipulateString(str) {
  const manipulatedStr = str.toUpperCase();
  function logString() {
    console.log(`The manipulated string is: ${manipulatedStr}`);
  }
  return logString;
}
// To use this function, we would call manipulateString with a string argument and then call the returned logString function:

const myString = "hello world";
const logManipulatedString = manipulateString(myString);
logManipulatedString(); // logs "The manipulated string is: HELLO WORLD"
