# freeCodeCamp practice

This repository is a personal learning workspace for exercises and small projects completed while following the [freeCodeCamp](https://www.freecodecamp.org/) curriculum. It records practice code rather than providing a finished application or reusable package.

Some files are completed solutions, while others may be experiments or work in progress. The repository does not currently have an automated test suite, so a file's presence should not be treated as proof that it passes the corresponding freeCodeCamp tests.

## Repository structure

```text
.
├── js/
│   ├── high-order/  # Array methods and higher-order function practice
│   ├── loops/       # Loop-focused exercises and larger data-processing drills
│   ├── reviews/     # Review exercises covering mixed JavaScript topics
│   └── package.json # CommonJS metadata; there are no runtime dependencies
└── web/
    └── tribute/     # Static responsive-web-design tribute page
```

## Requirements

- A recent Node.js version for the JavaScript exercises. Node.js 18 or newer is recommended because some files use `structuredClone()`.
- A modern browser for the web project.

No dependency installation or build step is required for the current files.

## Running JavaScript exercises

Run a file directly from the repository root:

```bash
node js/loops/missingletter.js
node js/reviews/story.js
```

Several exercises print example output with `console.log()`. Others only define a function and will exit without output when run directly; those files are intended to be evaluated in freeCodeCamp or called with a temporary local example.

The `js/package.json` file currently contains only project metadata. Its placeholder `npm test` command is not a test suite.

## Viewing the tribute page

Open `web/tribute/index.html` in a browser. The page has no build step, but its image is loaded from freeCodeCamp's CDN and therefore requires an internet connection.

## Adding practice work

1. Put JavaScript exercises in the topic folder that best matches the lesson.
2. Keep each exercise self-contained unless a shared module is deliberately introduced.
3. Use descriptive lowercase filenames, following the existing folder conventions.
4. Run a syntax check before committing:

   ```bash
   node --check path/to/exercise.js
   ```

5. For web projects, open the page in a browser and check both narrow and wide layouts.

Avoid committing dependency folders, editor settings, environment files, or generated logs. These are excluded by the root `.gitignore`.

## Attribution

The exercises and project requirements are based on the freeCodeCamp curriculum. Solution code in this repository represents personal practice.
