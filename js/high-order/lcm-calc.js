const smallestCommons = (arr) => {
  let range = [];

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    range.push(i);
  }

  return range.reduce((lcm, num) => {
    let candidate = Math.max(lcm, num);

    while (
      candidate % lcm !== 0 ||
      candidate % num !== 0
    ) {
      candidate++;
    }

    return candidate;
  });
};