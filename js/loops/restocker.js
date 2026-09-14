const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];
function parseShipment(rawData) {
  let arr = []
  for(let i=0;i<rawData.length;i++){
  let split = rawData[i].split("|");
  const result = {};
    let fou = false;
  for(let j=0;j<arr.length;j++){
    if(split[0] === arr[j].sku){
      fou = true;
    }
  }
    if(!fou){
  result.sku = split[0];
  result.name = split[1];
  result.qty = Number(split[2]);
  result.expires = split[3];
  if(split[4] === undefined){
    result.zone = "general"
  }
    else{
      result.zone = split[4];
    }
    arr.push(result);
    };
}
  return arr;
}

function planRestock(pantry, shipment){
  let arr = [];
  for(let i=0;i<shipment.length;i++){
    let found = false;
    for(let j=0;j<pantry.length;j++){
      if(shipment[i].sku === pantry[j].sku){
        found = true;
      }
    }
  if(shipment[i].qty <= 0){
    let res = {};
    res.type = "discard";
    res.item = shipment[i];
    arr.push(res);
  }
    else if(found){
      let res = {};
      res.type = "restock";
      res.item = shipment[i];
      arr.push(res)
    }
    else if(!found){
      let res = {};
      res.type = "donate"
      res.item = shipment[i];
      arr.push(res)
    }
}
  return arr;
}

const groupByZone = actions => {
  let obj = {};
  for(let i = 0; i < actions.length; i++){
 let zone = actions[i].item.zone;
    if(!obj[zone]){
    obj[zone]= [];
    }
    
      obj[zone].push(actions[i].type);
    }
  return obj;
}

function clonePantry(pantry){
  const clone = structuredClone(pantry);
  return clone;
}
const ship = parseShipment(rawData);
const use = planRestock(pantry, ship);
const zzz = groupByZone(use);
const cpp = clonePantry(pantry);
console.log(zzz, cpp);


