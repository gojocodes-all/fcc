const pairElement = (DNA) => {
  let use = DNA.split("");
  let arr = [];
  for (i = 0; i < use.length; i++) {
    if (use[i] === "A") {
      arr.push(["A", "T"]);
    } else if (use[i] === "T") {
      arr.push(["T", "A"]);
    } else if (use[i] === "C") {
      arr.push(["C", "G"]);
    } else if (use[i] === "G") {
      arr.push(["G", "C"]);
    }
  }
  return arr;
};
console.log(pairElement("GAAGA"))