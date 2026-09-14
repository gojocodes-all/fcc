function largestOfAll(arr){
  let largest = [];
  for(let i=0;i<arr.length;i++){
    let large = arr[i][0];
    for(let j=1;j<arr[i].length;j++){
      if(arr[i][j] > large){
        large = arr[i][j];
      }
      }
    largest.push(large);
    }
  return largest;
}

let aoa = [
  [1,200000000000,3,4,5],
  [5,10,1,50]
]
console.log(largestOfAll(aoa));
