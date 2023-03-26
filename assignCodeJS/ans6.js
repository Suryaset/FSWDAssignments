const profileUrl1 = "https://www.linkedin.com/in/john_doe123";
const profileUrl2 = "https://www.linkedin.com/in/mary-jones";
const profileUrl3 = "https://www.linkedin.com/in/john+doe";
const profileUrl4 = "https://www.linkedin.com/in/johndoe123";
const profileUrl5 = "https://www.linkedin.com/in/johndoe123456789012345678901234567890";
const profileUrl6 = "https://www.linkedin.com/in/johndoe";

const profileUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;

if (profileUrlRegex.test(profileUrl1)) {
  console.log(profileUrl1 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl1 + " is not a valid LinkedIn profile URL");
}

if (profileUrlRegex.test(profileUrl2)) {
  console.log(profileUrl2 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl2 + " is not a valid LinkedIn profile URL");
}

if (profileUrlRegex.test(profileUrl3)) {
  console.log(profileUrl3 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl3 + " is not a valid LinkedIn profile URL");
}

if (profileUrlRegex.test(profileUrl4)) {
  console.log(profileUrl4 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl4 + " is not a valid LinkedIn profile URL");
}

if (profileUrlRegex.test(profileUrl5)) {
  console.log(profileUrl5 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl5 + " is not a valid LinkedIn profile URL");
}

if (profileUrlRegex.test(profileUrl6)) {
  console.log(profileUrl6 + " is a valid LinkedIn profile URL");
} else {
  console.log(profileUrl6 + " is not a valid LinkedIn profile URL");
}
