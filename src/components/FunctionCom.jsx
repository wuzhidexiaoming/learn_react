import React from "react";
function FunctionCom() {
  console.log(this);
  let test = () => {
    console.log(this);
  };
  let inFn = function () {
    console.log("试一下");
  };
  return (
    <div
      onClick={(e) => {
        console.log("onClick-this", this);
        test();
        inFn();
        console.log(e);
      }}
    >
      函数式组件
    </div>
  );
}
export default FunctionCom;
