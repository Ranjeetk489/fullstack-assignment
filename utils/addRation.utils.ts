import { NextApiResponse } from "next";
import { Inventory } from "../types/ration";
import { FoodType, WaterType } from "../types/ration";

function extractInventoryData(inventory: Inventory[]) {
  let foodData: Array<FoodType> = [];
  let waterData: Array<WaterType> = [];
  let tempObj: any = {};
  console.log(inventory);
  // edge case to cover when all the inputs aren't provided
  for (const item of inventory) {
    //@ts-ignore
    if (item.value && item.name !== "Water Id" && item.name !== "Quantity") {
      let key = item.name;
      tempObj[key] = item.value;
      if (Object.keys(tempObj).length === 4) {
        foodData.push(tempObj);
        tempObj = {};
      }
    } else {
      let key = item.name;
      tempObj[key] = item.value;
      if (Object.keys(tempObj).length === 2) {
        waterData.push(tempObj);
        tempObj = {};
      }
    }
  }
  return { foodData, waterData };
}

async function addRationToDb(foodData: FoodType[], waterData: WaterType[]) {
  const reqBody = { foodData, waterData };
  const req = await fetch("/api/add_ration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const res = req.json();
  return res;
}

//? general util function
function showToast(res: NextApiResponse, toast) {
  let toastMsg = res.status;
  if (res.code === 409) {
    toastMsg = res.status;
    return toast.error(toastMsg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  toast(toastMsg);
}

export { extractInventoryData, addRationToDb, showToast };
