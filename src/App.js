import React, { useState, useEffect } from "react";

function App() {
  const [factorialValue, setFactorialValue] = useState(0);
  const [inputData, setInputData] = useState(0);

  const processForm = (e) => {
    e.preventDefault();
    try {
      const result = calculateFactorial(inputData);
      if (result) setFactorialValue(result);
      else if (result < 1) alert("Invalid Input");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Factorial Calculator</h1>
        <form onSubmit={(e) => processForm(e)}>
          <input
            type="number"
            name="factorial"
            placeholder="Enter a number..."
            value={inputData}
            required={true}
            onChange={(e) => setInputData(e.target.value)}
          />
          <br />
          <button type="submit">Calculate Factorial</button>
        </form>
        <h2>Factorial: {factorialValue}</h2>
      </div>
    </div>
  );
}

const calculateFactorial = (n) => {
  if (n < 0) return -1;
  else if (n === 0) return 1;
  else {
    return n * calculateFactorial(n - 1);
  }
};

export default App;
