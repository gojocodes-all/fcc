const pyramid = (str, num, bool) => {
  let result = "\n";

  if (bool === false) {
    for (let i = 1; i <= num; i++) {
      const spaces = " ".repeat(num - i);
      const characters = str.repeat(2 * i - 1);

      result += spaces + characters + "\n";
    }
  } else {
    for (let i = num; i >= 1; i--) {
      const spaces = " ".repeat(num - i);
      const characters = str.repeat(2 * i - 1);

      result += spaces + characters + "\n";
    }
  }

  return result;
};

console.log(pyramid("o", 5, false));
console.log(pyramid("o", 5, true));