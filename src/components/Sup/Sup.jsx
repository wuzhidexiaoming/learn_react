import React from "react";
import Sub from "./Sub";
class Sup extends React.Component {
  // 传递给子组件 props,执行下面的回调
  getNum = (payload) => {
    console.log(payload);
  };
  render() {
    return (
      <div>
        <Sub getNum={this.getNum} />
      </div>
    );
  }
}
export default Sup;
