import { InventoryData } from "../types/viewRation";


const RationTable = (props) => {
  const inventoryData: InventoryData = props.inventoryData;
  const {food, water} = inventoryData;
  const dataToShow: Array<string> = [
    "Schedule Date",
    "Packet Id",
    "Packet Content",
    "Calories",
    "Expiry Date",
    "Quantity in Liters",
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              {dataToShow.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
            </tr>
          </thead>
          <tfoot>
            <tr>
              {dataToShow.map((item, i) => (
                <th key={i + 1}>{item}</th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default RationTable;
