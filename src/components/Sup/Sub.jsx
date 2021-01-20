import React from "react";

class Sub extends React.Component {
  getNum = (e) => {
    // 接收到props后,就可以 this.props.xxx 直接传参调用父组件传过来的函数
    this.props.getNum({ event: e, number: Math.random() * 10 });
  };
  render() {
    return (
      <div>
        <button onClick={this.getNum}>传递数值给父元素</button>
      </div>
    );
  }
}

export default Sub;
