import React, { useState } from "react";

function AddItem() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: +new Date(),
        name: itemName,
      },
    ]);
    setItemName("");
  };

  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <input type="text" onChange={(event) => setItemName(event.target.value)} value={itemName} />
        </label>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AddItem;
