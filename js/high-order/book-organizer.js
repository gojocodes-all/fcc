const books = [
  {
    title: "lala",
    authorName: "David",
    releaseYear: 1995,
  },
  {
    title: "laa",
    authorName: "Fuad",
    releaseYear: 2005,
  },
  {
    title: "ala",
    authorName: "Davi",
    releaseYear: 1925,
  },
];

const sortByYear = (book1, book2) => book1.releaseYear - book2.releaseYear;

const organizeBooks = (items, minimumYear = 1960) =>
  items
    .filter((book) => book.releaseYear > minimumYear)
    .sort(sortByYear);

const filteredBooks = organizeBooks(books);

module.exports = { books, filteredBooks, organizeBooks, sortByYear };
