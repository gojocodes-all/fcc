const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => a - b);

  let index = arr.findIndex((value) => {
    return num <= value;
  });

  if (index === -1) {
    return arr.length;
  }

  return index;
};