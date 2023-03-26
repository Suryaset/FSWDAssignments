let delay = 3;
let countdown = setInterval(() => {
  console.log(`Generating random number in ${delay} seconds...`);
  delay--;
  if (delay < 0) {
    clearInterval(countdown);
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random number: ${randomNumber}`);
  }
}, 1000);