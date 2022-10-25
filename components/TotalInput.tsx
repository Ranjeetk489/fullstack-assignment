import React, { useEffect, useState } from "react";
import type { InventoryContent } from "../types/ration";

function TotalInput({ inventory }) {
  const [inventoryItems, setInventoryItems] = useState<InventoryContent>({
    food: 1,
    water: 0,
  });
  useEffect(() => {
    calculateInventory(inventory);
  }, [inventory]);

  function calculateInventory(inventory) {
    if (inventory) {
      const temp = { food: 0, water: 0 };
      for (let key of inventory) {
        if (key.value && key.name === "Water Id") temp.water++;
        else if (key.value && key.name === "Food Id") temp.food++;
      }
      console.log(temp);
      setInventoryItems(temp);
    }
  }

  return (
    <div>
      {(inventoryItems.food > 0 || inventoryItems.water > 0) && (
        <div className="h-[10rem] w-[18rem] border border-black flex flex-col justify-center items-center p-4">
          <span>
            Food Quantity(by ID) -{" "}
            <span className="text-lg">{inventoryItems.food}</span>
          </span>
          <span>
            Water Quantity(by ID)-{" "}
            <span className="text-lg">{inventoryItems.water}</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default TotalInput;
