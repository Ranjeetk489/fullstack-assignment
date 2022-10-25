import type { NextPage } from "next";
import { useState } from "react";
import InputRation from "../components/InputRation";
import TotalInput from "../components/TotalInput";
import type { Inventory, InventoryContentType } from "../types/ration";
import { addRationToDb, extractInventoryData } from "../utils/addRation.utils";

const AddRation: NextPage = () => {
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const handleSubmit = () => {
    // eslint-disable-next-line prettier/prettier
    // let foodData = {}, waterData = {};
    // for (const item of inventory) {
    //   //@ts-ignore
    //   if (item.value && item.name !== "Water Id" && item.name !== "quantity") {
    //     const tempKey = item.name;
    //     foodData = { ...foodData, [tempKey]: item.value };
    //   } else {
    //     const tempKey = item.name;
    //     waterData = { ...waterData, [tempKey]: item.value };
    //   }
    // }
    console.log(inventory);
    const { foodData, waterData }: InventoryContentType =
      extractInventoryData(inventory);
    const res = addRationToDb(foodData, waterData);
    console.log(res);
  };

  return (
    <div className="mx-auto w-fit flex items-center gap-8 shadow-md px-12 py-4 mt-4">
      <InputRation
        inventory={inventory}
        setInventory={setInventory}
        handleSubmit={handleSubmit}
      />
      <TotalInput inventory={inventory} />
    </div>
  );
};

export default AddRation;

// type FoodType = {
//   id: number;
//   name: string;
//   type: string;
// };

// type WaterType = {
//   waterId: string;
//   quantity: number;
// };

// type Inventory = FoodType | WaterType;
