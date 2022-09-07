import { useState } from "react";

const DisableSubmit = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h3>Disable Button</h3>
      <form>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        <button disabled={value < 1}>Submit</button>
      </form>
    </>
  );
};

export default DisableSubmit;
