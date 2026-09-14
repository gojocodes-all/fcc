function isPalindrome(word) {
  let lowerWord = word.toLowerCase();

  let arr = lowerWord.split("");
  arr.reverse();

  let reversed = arr.join("");

  return lowerWord === reversed;
}

const findPalindromeBreaks = words => {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
};

const findRepeatedPhrases = (words, phraseLength) => {
  const phrases = [];
  const repeatedIndices = [];

  // FCC specifically says this should return []
  if (phraseLength >= words.length) {
    return [];
  }

  // STEP 1:
  // Build every possible phrase
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = "";

    for (let j = 0; j < phraseLength; j++) {
      if (j > 0) {
        phrase += " ";
      }

      phrase += words[i + j];
    }

    phrases.push(phrase);
  }

  // STEP 2:
  // Check how many times each phrase appears
  for (let i = 0; i < phrases.length; i++) {
    let count = 0;

    for (let j = 0; j < phrases.length; j++) {
      if (phrases[i] === phrases[j]) {
        count++;
      }
    }

    // If it appears more than once,
    // its starting index belongs in the answer
    if (count > 1) {
      repeatedIndices.push(i);
    }
  }

  return repeatedIndices;
};

const analyzeTexts = (texts, phraseLength) => {
  const result = [];

  for (let i = 0; i < texts.length; i++) {
    const words = texts[i];

    const analysis = {
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    };

    result.push(analysis);
  }

  return result;
};