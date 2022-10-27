import type { NextPage } from "next";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputRation from "../components/InputRation";
import TotalInput from "../components/TotalInput";
import type { Inventory, InventoryContentType } from "../types/ration";
import {
  addRationToDb,
  extractInventoryData,
  showToast,
} from "../utils/addRation.utils";

const AddRation: NextPage = (props) => {
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
    // eslint-disable-next-line prettier/prettier
    const { foodData, waterData }: InventoryContentType = extractInventoryData(inventory);
    const res = await addRationToDb(foodData, waterData);
    showToast(res, toast);
    setLoading(false);
    console.log(res);
  };

  return (
    <>
      <ToastContainer />
      <div className="mx-auto w-fit flex items-center gap-8 shadow-md px-12 py-4 mt-4">
        <ColorRing
          visible={isLoading}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{ position: "fixed", top: "40%", left: "45%" }}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        <InputRation
          inventory={inventory}
          setInventory={setInventory}
          handleSubmit={handleSubmit}
        />
        <TotalInput inventory={inventory} />
      </div>
    </>
  );
};

export default AddRation;
