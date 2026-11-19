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
const sortByYear = (book1,book2) => {
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }
  else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }
  return 0;
};

const filteredBooks = books.filter(book => book.releaseYear > 1960);
filteredBooks.sort(a - b);