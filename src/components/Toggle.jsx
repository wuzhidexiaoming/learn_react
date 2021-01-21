import React, { useState } from "react";

function Toggle() {
  const [isToggle, setIsToggle] = useState(false);
  const changeFlag = () => {
    setIsToggle(!isToggle);
  };
  return <button onClick={changeFlag}>{isToggle ? "on" : "off"}</button>;
}

export default Toggle;
