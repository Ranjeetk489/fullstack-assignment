async function fetchInventoryData(signal, setInventory) {
  const res = await fetch("api/get_inventory", {
    method: "GET",
  });
  const resData = await res.json();
  setInventory(resData.data);
}

export { fetchInventoryData };
