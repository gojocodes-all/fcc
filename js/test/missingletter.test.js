const test = require("node:test");
const assert = require("node:assert/strict");

const { fearNotLetter } = require("../loops/missingletter");

test("returns the missing letter as a string", () => {
  assert.equal(fearNotLetter("abce"), "d");
  assert.equal(fearNotLetter("abcdefghjklmno"), "i");
  assert.equal(fearNotLetter("stvwx"), "u");
});

test("returns the first missing letter when a gap spans multiple characters", () => {
  assert.equal(fearNotLetter("abfg"), "c");
});

test("returns undefined when the sequence is complete", () => {
  assert.equal(fearNotLetter("abcdefghijklmnopqrstuvwxyz"), undefined);
});
