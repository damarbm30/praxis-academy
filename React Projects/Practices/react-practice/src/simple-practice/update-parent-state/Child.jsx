const Child = ({ handleUpdate }) => {
  return (
    <>
      <h1>Child</h1>
      <button onClick={handleUpdate}>Update state</button>
    </>
  );
};

export default Child;
