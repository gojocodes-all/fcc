function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const missingLetters = [];

  for (let i = 0; i < str.length - 1; i++) {
    const current = alphabet.indexOf(str[i]);
    const next = alphabet.indexOf(str[i + 1]);

    if (next !== current + 1) {
      for (let j = current + 1; j < next; j++) {
        missingLetters.push(alphabet[j]);
      }
    }
  }

  if (missingLetters.length === 0) {
    return undefined;
  }

  return missingLetters;
}

console.log(fearNotLetter("abfg"))