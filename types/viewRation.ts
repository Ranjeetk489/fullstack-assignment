/// View Ration Utils

export type Food = {
  id: string;
  type: string;
  packet_content: string;
  calories: number;
  expiry: string;
};

export type Water = {
  id: string;
  type: string;
  quantity: number;
};

export type InventoryData = {
  id: string;
  food?: Food;
  water?: Water;
};
