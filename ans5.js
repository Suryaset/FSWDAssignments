const regex = /^https?:\/\/[\w\d-]+(\.[\w]+)+$/;

const url1 = "https://www.example.com";
const url2 = "http://example1234.com";
const url3 = "https://www.example-.com";
const url4 = "ftp://www.example.com";

if (regex.test(url1)) {
  console.log(url1 + " is a valid URL");
} else {
  console.log(url1 + " is not a valid URL");
}

if (regex.test(url2)) {
  console.log(url2 + " is a valid URL");
} else {
  console.log(url2 + " is not a valid URL");
}

if (regex.test(url3)) {
  console.log(url3 + " is a valid URL");
} else {
  console.log(url3 + " is not a valid URL");
}

if (regex.test(url4)) {
  console.log(url4 + " is a valid URL");
} else {
  console.log(url4 + " is not a valid URL");
}
