const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");

const html = readFileSync(
  path.join(__dirname, "../../web/tribute/index.html"),
  "utf8",
);
const tributeLink = html.match(
  /<a\s[^>]*id="tribute-link"[^>]*>[\s\S]*?<\/a>/,
)?.[0];

test("the tribute link warns about and isolates its new tab", () => {
  assert.ok(tributeLink, "expected the tribute link to remain present");
  assert.match(
    tributeLink,
    /href="https:\/\/en\.wikipedia\.org\/wiki\/Norman_Borlaug"/,
  );
  assert.match(tributeLink, /target="_blank"/);
  assert.match(tributeLink, /opens in a new tab/i);

  const relTokens = new Set(
    tributeLink.match(/rel="([^"]+)"/)?.[1].split(/\s+/) || [],
  );
  assert.equal(relTokens.has("noopener"), true);
});
