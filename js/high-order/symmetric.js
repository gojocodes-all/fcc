const diffArray = (arr1,arr2) => {
 const first = arr1.filter((values) => !arr2.includes(values));
  const second = arr2.filter((values) => !arr1.includes(values));
  const newarr =[...first,...second]
  return newarr;
}
console.log(diffArray(["diamond", "stick", "apple"],["stick", "emerald", "bread"]));