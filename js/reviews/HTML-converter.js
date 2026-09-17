function convertHTML(str){
  let use = str.split("");
  for(let i =0;i<use.length;i++){
    let la = use[i];
    if(use[i] === "&"){
      use[i] = "&amp;";
    }
    else if(use[i] === "<"){
      use[i] = "&lt;";
    }
    else if(use[i] === ">"){
      use[i] = "&gt;";
    }
    else if(use[i] === `"`){
      use[i] = "&quot;";
    }
    else if(use[i] === `'`){
      use[i] = "&apos;";
    }
  }
  let result = use.join("");
  return result;
}
console.log(convertHTML("Hamburgers & Pizza > Tacos"))