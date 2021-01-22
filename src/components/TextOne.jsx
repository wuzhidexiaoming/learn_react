import React, { useState } from "react";

function TextOne() {
  const [textFlag, setTextFlag] = useState(false);
  function changeFlag() {
    setTextFlag(!textFlag);
  }

  return <h2 onClick={changeFlag}>今天天气很{textFlag ? "炎热" : "凉爽"}</h2>;
}

export default TextOne;
