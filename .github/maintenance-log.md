# Maintenance log

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
