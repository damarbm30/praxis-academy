import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <p>Double: {double}</p>
    </>
  );
}

export default Count;
