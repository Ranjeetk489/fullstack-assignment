import { NextPage } from "next";
import { useEffect, useState } from "react";
import RationTable from "../components/RationTable";
import { InventoryData } from "../types/viewRation";
import { fetchInventoryData } from "../utils/viewRation.utils";

const ViewRation: NextPage = (props) => {
  const [inventoryData, setInventory] = useState<InventoryData>([]);

  useEffect(() => {
    const controller = new AbortController();
    fetchInventoryData(controller.signal, setInventory);
    //to perfrom cleanup on requests
    return () => {
      controller.abort;
    };
  }, []);
  return (
    <>
      <RationTable inventoryData={inventoryData} />
    </>
  );
};

export default ViewRation;
