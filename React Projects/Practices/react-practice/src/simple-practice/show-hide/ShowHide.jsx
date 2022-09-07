import React, { useState } from "react";

const Practice = () => {
  const [visibility, setVisibility] = useState(true);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <button onClick={handleVisibility}>{visibility ? "Show element" : "Hide element"}</button>
      {visibility && <p>Hello</p>}
    </div>
  );
};

export default Practice;
