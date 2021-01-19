import React from "react";

class LearnRef extends React.Component {
  state = {
    nameFlag: true,
  };
  myInput = React.createRef();
  getRef = () => {
    this.printValue(this.myInput.current.value);
  };
  getValue = (e) => {
    console.log(e.target);
    this.printValue(e.target.value);
    this.setState(() => ({ nameFlag: !this.state.nameFlag }));
  };
  printValue = (value) => {
    console.log(value);
  };
  render() {
    const { nameFlag } = this.state;
    return (
      <div>
        <div>{nameFlag ? "小明" : "小红"}</div>
        <input ref={this.myInput} />
        <button onClick={this.getRef}>点击获取左侧输入框的值</button>
        <input onBlur={this.getValue} />
      </div>
    );
  }
}

export default LearnRef;
