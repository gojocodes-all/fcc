const frankenSplice = (arr1,arr2,index) => {
  const copy1 = arr1.slice();
  const copy2 = arr2.slice();
  for(let i=0;i<arr1.length;i++){
    copy2.splice(index + i,0,arr1[i]);
  }
  return copy2;
}
const arr1 = ["i","am","boy"]
const arr2 = ["a","nice"];
console.log(frankenSplice(arr2,arr1,2));