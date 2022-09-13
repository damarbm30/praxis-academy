import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = () => {
  const [item, setItem] = useState("");
  const [result, setResult] = useState(false);

  const ops = ["/", "*", "+", "-", "."];

  const createDigits = () => {
    let digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => handleUpdateCalculator(i.toString())}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const handleUpdateCalculator = (value) => {
    // return nothing if the last item is an operator or empty or a result
    if (
      (ops.includes(item.slice(-1)) && ops.includes(value)) ||
      (item === "" && ops.includes(value)) ||
      (result && ops.includes(value))
    ) {
      return;
    }
    setItem(item + value);

    // remove result when entering new input
    if (result) {
      setItem("" + value);
      setResult(false);
    }
  };

  const handleDelete = () => {
    setItem(item.slice(0, -1));
  };

  const handleResult = () => {
    setItem(eval(item).toString());
    setResult(true);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{item || 0}</div>
        <div className="operators">
          <button onClick={() => handleUpdateCalculator("/")}>/</button>
          <button onClick={() => handleUpdateCalculator("*")}>*</button>
          <button onClick={() => handleUpdateCalculator("+")}>+</button>
          <button onClick={() => handleUpdateCalculator("-")}>-</button>
          <button onClick={handleDelete}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => handleUpdateCalculator("0")}>0</button>
          <button onClick={() => handleUpdateCalculator(".")}>.</button>
          <button onClick={handleResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
