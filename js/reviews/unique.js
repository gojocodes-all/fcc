function untieUnique(arr1,arr2,...arr){
let  finalarr =[];
  for(let i=0;i<arr1.length;i++){
  finalarr.push(arr1[i]);
  }
  for(let j=0;j<arr2.length;j++){
  finalarr.push(arr2[j]);
  }
  if(arr){
for(let k=0;k<arr.length;k++){
  let laa = arr[k];
  for(let l=0;l<laa.length;l++){
  finalarr.push(laa[l]);
  }
}
}
  let result = [];
  for(let m=0;m<finalarr.length;m++){
    if(!result.includes(finalarr[m])){
      result.push(finalarr[m]);
    }
  }
  return result;
}
const arr1 = [1,2,4];
const arr2 = [2,3,5];
const arr3 = [10,10,15,19];
const arr4 = [15,19,25,29];
console.log(untieUnique(arr1,arr2));