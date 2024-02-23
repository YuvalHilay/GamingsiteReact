import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");
  const [counter,setCounter] = useState(0);

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  const increment =() => {
    setCounter(counter +1);
  };

  return (
    <div>
      <h1>update string using UseState</h1>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
      <h1>update number using UseState</h1>
      <button onClick={increment}> upate number</button>
      {counter}
    </div>
  );
};

export default StateTutorial;