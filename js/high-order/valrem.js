function destroyer(arr,...other){
  return arr.filter((value) => !other.includes(value));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))