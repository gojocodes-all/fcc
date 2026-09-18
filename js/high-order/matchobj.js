const whatIsInAName = (arr,obj) => {
  return arr.filter((values) => Object.keys(obj).every(key => obj[key] === values[key]));
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))