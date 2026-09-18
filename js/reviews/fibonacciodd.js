function sumFibs(num) {
  let storage;
  let first = 0;
  let second = 1;
  let sum = 1;

  for (let i = 0; i < num; i++) {
    storage = second;
    second = first + second;
    first = storage;

    if (second > num) {
      break;
    }

    if (second % 2 !== 0) {
      sum += second;
    }
  }

  return sum;
}

console.log(sumFibs(1000));