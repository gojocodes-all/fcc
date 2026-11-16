const inventory = [];

const findProductIndex = (name) => {
  const normalizedName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === normalizedName) {
      return i;
    }
  }

  return -1;
};

const addProduct = (obj) => {
  const normalizedName = obj.name.toLowerCase();
  const productIndex = findProductIndex(normalizedName);

  if (productIndex === -1) {
    inventory.push({ ...obj, name: normalizedName });
    console.log(`${normalizedName} added to inventory`);
    return;
  }

  inventory[productIndex].quantity += obj.quantity;
  console.log(`${inventory[productIndex].name} quantity updated`);
};

const removeProduct = (name, quantity) => {
  const normalizedName = name.toLowerCase();
  const productIndex = findProductIndex(normalizedName);

  if (productIndex === -1) {
    console.log(`${normalizedName} not found`);
    return;
  }

  const product = inventory[productIndex];

  if (quantity > product.quantity) {
    console.log(`Not enough ${normalizedName} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantity;

  if (product.quantity === 0) {
    inventory.splice(productIndex, 1);
    return;
  }

  console.log(`Remaining ${normalizedName} pieces: ${product.quantity}`);
};

module.exports = {
  addProduct,
  findProductIndex,
  inventory,
  removeProduct,
};
