import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [value, setValue] = useState("Need to be updated");

  const handleUpdate = () => {
    setValue("Successfully updated");
  };

  return (
    <>
      <h1>
        Parent
        <p>{value}</p>
        <Child handleUpdate={handleUpdate} />
      </h1>
    </>
  );
};

export default Parent;
