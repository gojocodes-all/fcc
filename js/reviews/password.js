const generatePassword = length => {
  let str = "";
let pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let poolArr = pool.split("");
  for(i=1;i<=length;i++){
    let random = Math.floor(Math.random() * poolArr.length);
    str += poolArr[random];
  }
  return str;
}
const password = generatePassword(15);
console.log(`Generated password: ${password}`)
