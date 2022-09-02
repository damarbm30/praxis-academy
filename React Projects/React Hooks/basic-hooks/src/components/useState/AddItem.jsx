import React, { useState } from "react";

function AddItem() {
  const [items, setItems] = useState([{ id: 1, name: "First", description: "First item" }]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: +new Date(),
        name: itemName,
        description: itemDescription,
      },
    ]);
    setItemName("");
    console.log(items);
  };

  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <input type="text" onChange={(event) => setItemName(event.target.value)} value={itemName} />
          <textarea
            placeholder="Tuliskan catatanmu di sini"
            onChange={(event) => setItemDescription(event.target.value)}
            value={itemDescription}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id} {item.name} {item.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddItem;
