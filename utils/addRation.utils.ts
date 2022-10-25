import { Inventory } from "../types/ration";

import { FoodType, WaterType } from "../types/ration";

function extractInventoryData(inventory: Inventory[]) {
  let foodData = [];
  let waterData = [];
  let tempObj: any = {};
  console.log(inventory)
  // edge case to cover when all the inputs aren't provided
  for (const item of inventory) {
    //@ts-ignore

    if (item.value && item.name !== "Water Id" && item.name !== "Quantity") {
      let key = item.name;
      tempObj[key] = item.value;
      if (Object.keys(tempObj).length === 4) {
        foodData.push(tempObj);
        console.log(tempObj)
        tempObj = {};
      }
      
      // console.log(tempObj)
      // foodData = [{ ...foodData, [tempKey]: item.value }]
    } else {
     
      if (Object.keys(tempObj).length === 2) {
        waterData.push(tempObj);
        tempObj = {};
      }
      let key = item.name;
      // console.log(tempObj);
      tempObj[key] = item.value; 
    }
  }
  return { foodData, waterData };
}

async function addRationToDb(foodData: FoodType, waterData: WaterType) {
  //   foodData["id"] = foodData["Food Id"];
  //   foodData["packet_content"] = foodData["Packet Content"];
  //   waterData["id"] = waterData["Water Id"];
  //   delete foodData["Food Id"];
  //   delete foodData["Packet Content"];
  //   delete waterData["Water Id"];
  const reqBody = { foodData, waterData };
  console.log(reqBody);
  await fetch("/api/add_ration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  //   const data = await res.json();
  //   return data;
}

export { extractInventoryData, addRationToDb };
