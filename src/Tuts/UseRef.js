import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default UseRef;