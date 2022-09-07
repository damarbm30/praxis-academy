import React from "react";

const Parent = ({ children }) => {
  return (
    <div>
      <p>Parent Component</p>
      {children}
    </div>
  );
};

export default Parent;
