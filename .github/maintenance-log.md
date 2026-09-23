# Maintenance log

## 2026-09-23 — Repository guide and ignore rules

- **Rationale:** The repository contained JavaScript exercises and a static web project but no top-level explanation of its learning purpose, layout, prerequisites, execution model, or current lack of automated tests.
- **Files changed:** `README.md`, `.gitignore`, and `.github/maintenance-log.md`.
- **Validation performed:** Syntax-checked every non-empty JavaScript file with `node --check`, verified every documented repository path, and ran `git diff --check`.
- **Risk level:** Low. Documentation and ignore rules only; no exercise or website behavior changes.
- **Rollback:** Revert this change to remove the guide, ignore rules, and maintenance record.
