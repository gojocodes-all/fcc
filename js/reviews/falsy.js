function bouncer(arr){
  let newarr = [];
  const falsy = [false,null,0,"",undefined,NaN]
  for(const values of arr){
    if(!falsy.includes(values)){
      newarr.push(values);
    }
  }
  return newarr;
}