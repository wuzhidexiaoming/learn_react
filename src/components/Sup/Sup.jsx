import React from "react";
import Sub from "./Sub";
class Sup extends React.Component {
  state = {
    num: 0,
  };
  // 传递给子组件 props,执行下面的回调
  getNum = (payload) => {
    console.log(payload);
    this.setState({
      num: payload.number,
    });
  };
  render() {
    return (
      <div>
        <Sub getNum={this.getNum} />
        <div>父元素的num{this.state.num}</div>
      </div>
    );
  }
}
export default Sup;
