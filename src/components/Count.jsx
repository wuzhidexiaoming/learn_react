import React, { useState } from "react";
function Count() {
  console.log("渲染");
  const [count, setCount] = useState(0);
  const oldCount = 0;
  function test() {
    setCount(count + 1);
  }
  function reset() {
    setCount(oldCount);
    console.log(0);
  }
  return (
    <div>
      <button onClick={test}>点击+1</button>
      <button onClick={reset}>重置</button>
      <p>{count}</p>
    </div>
  );
}
export default Count;
