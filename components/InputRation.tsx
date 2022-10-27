const foodData = [
  { id: 1, name: "Food Id", type: "text", value: "" },
  { id: 2, name: "Packet Content", type: "text", value: "" },
  { id: 3, name: "Calories", type: "number", value: "" },
  { id: 4, name: "Expiry Date", type: "date", value: "" },
];
const waterData = [
  { id: 1, name: "Water Id", type: "text", value: "" },
  { id: 2, name: "Quantity", type: "number", value: "" },
];

const InputRation = ({ inventory, setInventory, handleSubmit }) => {
  // console.log(inventory)
  return (
    <>
      <div className=" ">
        <div className="flex gap-4 my-4">
          <button
            onClick={() => setInventory([...inventory, ...foodData])}
            className="btn btn-primary"
          >
            Add food
          </button>
          <button
            onClick={() => setInventory([...inventory, ...waterData])}
            className="btn btn-secondary"
          >
            Add water
          </button>
          <button onClick={handleSubmit} className="btn">
            Submit
          </button>
        </div>
        <div className="flex">
          <div
            className={
              inventory && inventory.length > 1
                ? "overflow-y-scroll h-[30rem]"
                : "hidden"
            }
          >
            {inventory && inventory.length > 1 && (
              <InventoryInput
                inventory={inventory}
                setInventory={setInventory}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InputRation;

const InventoryInput = ({ inventory, setInventory }) => {
  // changes values in inventory from user  input
  // implement checking whether input is provided in all fields or not
  const handleInput = (e, i) => {
    const temp = JSON.parse(JSON.stringify(inventory));
    console.log(i);
    temp[i].value = e.target.value;
    console.log(temp);
    setInventory([...temp]);
  };

  //maps over the inventory and shows the inventory itemss
  return (
    <>
      {inventory.map((item, i) => {
        return (
          <div key={i} className="flex flex-col gap-2 mt-4">
            <label htmlFor={item.name} className="label-text">
              {item.name}
            </label>
            <input
              type={item.type}
              id={item.name}
              className="input input-bordered max-w-xs w-[27rem] mr-8"
              onChange={(e) => handleInput(e, i)}
            />
          </div>
        );
      })}
    </>
  );
};
