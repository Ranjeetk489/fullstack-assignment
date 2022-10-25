export type FoodType = {
  "Food Id": string;
  "Packet Content": string;
  Calories: string;
  Expiry: string;
};

export type WaterType = {
  "Water Id": string;
  Quantity: number;
};

export type InventoryContentType = {
  foodData: FoodType;
  waterData: WaterType;
};

export type InventoryContent = {
  food: number;
  water: number;
};

export type Inventory = {
  id: number;
  name: string;
  type: string;
  value: number;
};
