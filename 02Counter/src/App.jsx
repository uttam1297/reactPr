import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 5

  const addValue = () => {
    if (counter >= 20) {
      console.log("value is greater than 20");
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      console.log("value is less than 0");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add Value </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
