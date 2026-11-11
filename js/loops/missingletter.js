function fearNotLetter(str) {
  for (let index = 1; index < str.length; index++) {
    const expectedCode = str.charCodeAt(index - 1) + 1;

    if (str.charCodeAt(index) !== expectedCode) {
      return String.fromCharCode(expectedCode);
    }
  }

  return undefined;
}

module.exports = { fearNotLetter };
