const books = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      year: 2018,
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      year: 2015,
    },
  ];
  
  const filteredBooks = books.filter((book) => book.year >= 2010);
  
  const capitalizedAuthorBooks = filteredBooks.map((book) => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year,
    };
  });
  
  console.log(capitalizedAuthorBooks);
  