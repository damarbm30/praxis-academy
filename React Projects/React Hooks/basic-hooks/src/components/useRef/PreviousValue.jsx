import React, { useRef, useState, useEffect } from "react";

const PreviousValue = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  console.log(name);
  console.log(prevName);

  return (
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>
        My name is {name}. It used to be {prevName.current}
      </p>
    </>
  );
};

export default PreviousValue;
