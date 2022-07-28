import React, { useState } from "react";

function Counter({ counter, setCounter }) {
  const onClickFunc = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}번 클릭했습니다</div>
      <button onClick={onClickFunc}>Click me</button>
    </div>
  );
}
export default Counter;
