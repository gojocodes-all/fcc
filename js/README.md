# JavaScript practice index

This directory contains personal JavaScript exercises completed while working
through freeCodeCamp lessons and review challenges. The files are learning
snapshots rather than a published library: syntax-valid code may still be
incomplete or fail the original freeCodeCamp assertions.

## Current status

- 27 non-empty exercise files pass `node --check`.
- `high-order/deep-flat.js` and `high-order/ppty-validator.js` are empty
  placeholders.
- `saveme.js` contains informal text notes despite its `.js` extension and is
  not executable JavaScript.
- `hi` is also an informal text note and has no JavaScript extension.
- There is no automated correctness test suite.

## Exercise catalogue

### `high-order/`

| File | Practice topic |
| --- | --- |
| `book-organizer.js` | Filtering and sorting book objects |
| `deep-flat.js` | Empty placeholder |
| `lcm-calc.js` | Smallest common multiple across a numeric range |
| `matchobj.js` | Filtering objects by matching properties |
| `ppty-validator.js` | Empty placeholder |
| `sortedindex.js` | Finding an insertion index in sorted data |
| `symmetric.js` | Symmetric difference between arrays |
| `valrem.js` | Removing selected values with rest parameters |

### `loops/`

| File | Practice topic |
| --- | --- |
| `missingletter.js` | Finding a missing character in a sequence |
| `proofread.js` | Analysing text for palindromes and repeated phrases |
| `restocker.js` | Parsing shipments and planning inventory restocks |

### `reviews/`

| File | Practice topic |
| --- | --- |
| `DNA-pair-generator.js` | Building DNA base pairs |
| `HTML-converter.js` | Escaping HTML entities |
| `elementskipper.js` | Dropping array values until a predicate passes |
| `falsy.js` | Removing falsy values |
| `fibonacciodd.js` | Summing odd Fibonacci numbers |
| `firstelement.js` | Finding the first value accepted by a predicate |
| `frankensplice.js` | Copying values into another array |
| `gradebook.js` | Computing grades and pass messages |
| `inventory.js` | Adding and removing inventory quantities |
| `largestofall.js` | Selecting the largest value from nested arrays |
| `password.js` | Generating a random password |
| `playlist-remixer.js` | Flattening, scoring and deduplicating tracks |
| `pyramid.js` | Rendering aligned text pyramids |
| `reversestr.js` | Reversing a string |
| `story.js` | Compacting, sorting and deduplicating story fragments |
| `sumall.js` | Summing an inclusive numeric range |
| `titlecase.js` | Converting text to title case |
| `unique.js` | Combining arrays without duplicate values |

## Run an exercise

From the repository root, pass the path to Node.js:

```bash
node js/high-order/matchobj.js
node js/loops/proofread.js
node js/reviews/password.js
```

Some files print a built-in example. Others only define a function and exit
without output; use the freeCodeCamp test runner or add a temporary local call
when reviewing those exercises.

## Validate syntax

Check one file:

```bash
node --check js/reviews/inventory.js
```

Check every JavaScript path except the documented text-only `saveme.js` file:

```bash
find js -type f -name '*.js' ! -name 'saveme.js' -print0 \
  | xargs -0 -n1 node --check
```

This command verifies JavaScript syntax only. It does not prove that an
exercise is complete or produces the answer expected by freeCodeCamp.

## Add or continue an exercise

1. Choose the folder that best matches the topic.
2. Replace an existing placeholder when continuing that named exercise.
3. Use a descriptive lowercase filename for new work.
4. Run `node --check` on the changed file.
5. Run the example and the corresponding freeCodeCamp tests when available.

Keep informal notes in a text or Markdown file so they are not mistaken for
runnable JavaScript.
