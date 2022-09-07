import { useState } from "react";

const DataBinding = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <p>{value}</p>
    </>
  );
};

export default DataBinding;
