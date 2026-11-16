const test = require("node:test");
const assert = require("node:assert/strict");

const {
  addProduct,
  findProductIndex,
  inventory,
  removeProduct,
} = require("../reviews/inventory");

test.beforeEach(() => {
  inventory.length = 0;
});

test("adds the first product and updates an existing product without duplicates", () => {
  addProduct({ name: "Flour", quantity: 4 });
  addProduct({ name: "flour", quantity: 3 });

  assert.deepEqual(inventory, [{ name: "flour", quantity: 7 }]);
});

test("finds products beyond the first entry case-insensitively", () => {
  inventory.push(
    { name: "flour", quantity: 4 },
    { name: "sugar", quantity: 2 },
  );

  assert.equal(findProductIndex("SUGAR"), 1);
  assert.equal(findProductIndex("Salt"), -1);
});

test("removes available stock and deletes products when none remains", () => {
  inventory.push(
    { name: "flour", quantity: 4 },
    { name: "sugar", quantity: 5 },
  );

  removeProduct("sugar", 2);
  assert.deepEqual(inventory, [
    { name: "flour", quantity: 4 },
    { name: "sugar", quantity: 3 },
  ]);

  removeProduct("SUGAR", 3);
  assert.deepEqual(inventory, [{ name: "flour", quantity: 4 }]);
});

test("keeps stock unchanged when the requested quantity is unavailable", () => {
  inventory.push({ name: "sugar", quantity: 2 });

  removeProduct("sugar", 3);

  assert.deepEqual(inventory, [{ name: "sugar", quantity: 2 }]);
});
