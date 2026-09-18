const dropElements = (arr,func) =>{
  let newarr = [];
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
     let sliced = arr.slice(i);
      for(let j=0;j<sliced.length;j++){
        newarr.push(sliced[j]);
      }
      break;
    }
  }
  return newarr;
}
const test = n => {return n === 2};
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))