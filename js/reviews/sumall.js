const sumAll = (n,m) => {
  let um = m;
  let un = n;
  if(n>m){
    let stor = n;
    un=um;
    um = stor;
  }
  let sum = 0;
  for(i=un;i<=um;i++){
    sum += i;
  }
  return sum;
}
console.log(sumAll(2,4));