const inventory = [];
const findProductIndex = (name) => {
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === name.toLowerCase()) {
      return i;
    }
    return -1;
  }
};
const addProduct = (obj) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === obj.name.toLowerCase()) {
      inventory[i].quantity += obj.quantity;
      console.log(`${inventory[i].name} quantity updated`);
    } else {
      inventory.push(obj);
      console.log(`${obj.name} added to inventory`);
    }
  }
};
const removeProduct = (name, quantity) => {
  for (let i = 0; i < inventory.length; i++) {
    let orig = inventory[i].quantity;
    let idk = inventory[i].quantity - quantity;
    if (name.toLowerCase() === inventory[i].name.toLowerCase() && idk !== 0) {
      inventory[i].quantity = idk;
      console.log(`Remaining ${name} pieces: ${inventory[i].quantity}`);
    } else if (
      name.toLowerCase() === inventory[i].name.toLowerCase() &&
      idk === 0
    ) {
      inventory.splice(i, 1);
    } else if (
      name.toLowerCase() === inventory[i].name.toLowerCase() &&
      idk < 0
    ) {
      console.log(`Not enough ${name} available, remaining pieces: ${orig}`);
    } else {
      console.log(`${name} not found`);
    }
  }
};
