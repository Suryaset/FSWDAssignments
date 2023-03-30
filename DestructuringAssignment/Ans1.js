function wordCount(string) {
  // split the string into words
  const words = string.split(" ");
  
  // initialize a Map to store word counts
  const wordCounts = new Map();
  
  // iterate over the words and increment their count in the Map
  for (const word of words) {
    const count = wordCounts.get(word) || 0;
    wordCounts.set(word, count + 1);
  }
  
  return wordCounts;
}

// Example usage:
const string = "I tried to write a novel in a day, but my pen ran out of ink after the first sentence. So, I decided to take a break and make myself some tea. As I sat down to enjoy my tea, I realized that I had accidentally used salt instead of sugar. I couldn't stop laughing at myself for making such a silly mistake.";

const wordCounts = wordCount(string);
console.log(wordCounts);

