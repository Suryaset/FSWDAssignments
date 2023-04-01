function logTitlesInAlphabeticalOrder(books) {
  const titles = books.map(book => book.title);
  titles.sort();
  console.log('Titles in alphabetical order:');
  titles.forEach(title => console.log(title));
}

const books = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
];

logTitlesInAlphabeticalOrder(books);
