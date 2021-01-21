import React, { useState, useRef } from "react";

function LearnRef() {
  const [nameFlag, setNameFlag] = useState(true);
  const myInput = useRef(null);
  function getRef() {
    console.log(myInput);
    printValue(myInput.current.value);
  }
  function getValue(e) {
    printValue(e.target.value);
  }
  function printValue(value) {
    console.log(value);
    setNameFlag(!nameFlag);
  }
  return (
    <div>
      <div>{nameFlag ? "小明" : "小红"}</div>
      <input ref={myInput} />
      <button onClick={getRef}>点击获取左侧输入框的值</button>
      <input onBlur={getValue} />
      <span>(点击按钮或失去焦点后 小红/小名 会变化)</span>
    </div>
  );
}

export default LearnRef;
