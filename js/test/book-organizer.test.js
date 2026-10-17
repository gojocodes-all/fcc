const test = require("node:test");
const assert = require("node:assert/strict");

const {
  books,
  filteredBooks,
  organizeBooks,
  sortByYear,
} = require("../high-order/book-organizer");

test("filters books after 1960 and sorts them by release year", () => {
  assert.deepEqual(
    filteredBooks.map(({ title, releaseYear }) => ({ title, releaseYear })),
    [
      { title: "lala", releaseYear: 1995 },
      { title: "laa", releaseYear: 2005 },
    ],
  );
});

test("organizing books does not mutate the source array", () => {
  const input = [
    { title: "newer", releaseYear: 2020 },
    { title: "older", releaseYear: 1980 },
    { title: "excluded", releaseYear: 1960 },
  ];
  const snapshot = structuredClone(input);

  assert.deepEqual(organizeBooks(input), [input[1], input[0]]);
  assert.deepEqual(input, snapshot);
  assert.deepEqual(books.map((book) => book.releaseYear), [1995, 2005, 1925]);
});

test("sortByYear compares the releaseYear values", () => {
  assert.ok(sortByYear({ releaseYear: 1980 }, { releaseYear: 2000 }) < 0);
  assert.equal(sortByYear({ releaseYear: 2000 }, { releaseYear: 2000 }), 0);
  assert.ok(sortByYear({ releaseYear: 2020 }, { releaseYear: 2000 }) > 0);
});
