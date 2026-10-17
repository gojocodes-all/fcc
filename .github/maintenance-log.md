# Maintenance log

## 2026-10-17 — Fix book organizer sorting

- **Rationale:** `js/high-order/book-organizer.js` attempted to evaluate undefined variables with `filteredBooks.sort(a - b)`, so running the exercise always threw a `ReferenceError` instead of filtering and ordering the sample books. The file already defined the intended year comparator but never passed it to `sort()`.
- **Files changed:** `js/high-order/book-organizer.js`, `js/test/book-organizer.test.js`, `js/package.json`, `js/README.md`, `README.md`, and `.github/maintenance-log.md`.
- **Validation performed:** Ran `npm test` (3 tests passed), `node --check high-order/book-organizer.js`, `node high-order/book-organizer.js`, and reviewed the complete diff for scope, compatibility, security, and documentation accuracy.
- **Risk level:** Low. The change repairs an exercise that previously crashed, keeps the original strict post-1960 filter, avoids mutating the source array, and adds no dependency.
- **Rollback:** Revert this commit to restore the previous exercise, package script, focused test, and documentation state.

## 2026-10-12 — Catalogue JavaScript practice status

- **Rationale:** JavaScript work added after the original repository guide included 27 runnable exercise files, two empty placeholders and informal scratch notes. The top-level README did not distinguish these states, and `js/saveme.js` could be mistaken for executable JavaScript despite containing plain text.
- **Files changed:** `js/README.md`, `README.md`, and `.github/maintenance-log.md`.
- **Validation performed:** Inspected every tracked file in `js/`; syntax-checked every `.js` path except the documented text-only `js/saveme.js`; verified the 27 non-empty runnable files, two empty placeholders, catalogue paths, Markdown links and code fences; and ran `git diff --check`.
- **Risk level:** Low. Documentation only; exercise contents, scratch notes, web assets, package metadata and runtime behavior are unchanged.
- **Rollback:** Revert this documentation commit to remove the JavaScript catalogue and maintenance entry without affecting practice code.

## 2026-09-23 — Repository guide and ignore rules

- **Rationale:** The repository contained JavaScript exercises and a static web project but no top-level explanation of its learning purpose, layout, prerequisites, execution model, or current lack of automated tests.
- **Files changed:** `README.md`, `.gitignore`, and `.github/maintenance-log.md`.
- **Validation performed:** Syntax-checked every non-empty JavaScript file with `node --check`, verified every documented repository path, and ran `git diff --check`.
- **Risk level:** Low. Documentation and ignore rules only; no exercise or website behavior changes.
- **Rollback:** Revert this change to remove the guide, ignore rules, and maintenance record.
