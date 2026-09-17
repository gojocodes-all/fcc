function titleCase(str){
  let splitted = str.split(" ");
  let newstr = "";
  for(let j =0;j<splitted.length;j++){
    let words = splitted[j];
  let upper = words[0].toUpperCase();
    newstr += upper;
    for(i=1;i<=words.length -1;i++){
      newstr += words[i].toLowerCase();
    }
    if(j !== splitted.length - 1){
    newstr += " ";
    };
  }
  return newstr;
}
console.log(titleCase("javaScript is fun"));