import React from "react";
import Child from "./Child";
import Parent from "./Parent";

const ReactChildren = () => {
  return (
    <>
      <Parent>
        <Child />
      </Parent>
    </>
  );
};

export default ReactChildren;
