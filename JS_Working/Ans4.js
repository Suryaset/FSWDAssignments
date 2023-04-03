{
  let always = "Fine"; // block-scoped variable
  const sometimes = "Stressed"; // block-scoped variable
  var never = "late"; // function-scoped variable
  
  console.log(always); // logs Fine
  console.log(sometimes); // logs Stressed
  console.log(never); // logs late
}
console.log(never); // logs late
console.log(always);  // ReferenceError: always is not defined
console.log(sometimes); // ReferenceError: sometimes is not defined