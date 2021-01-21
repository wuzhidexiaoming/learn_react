import React from "react";
function FunctionCom() {
  console.log(this);
  let test = (e) => {
    console.log('e',e);
    console.log('this',this);
  };
  let inFn = function () {
    console.log("试一下");
  };
  return (
    <div>
      <div
        onClick={(e) => {
          console.log("onClick-this", this);
          test();
          inFn(e);
          console.log(e);
        }}
      >
        函数式组件
      </div>
      <button onClick={test}>惦记我 看控制台</button>
    </div>
  );
}
export default FunctionCom;
