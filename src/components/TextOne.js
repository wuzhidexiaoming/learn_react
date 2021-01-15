import React from "react";

class TextOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textFlag: false,
    }
    console.log(this)
    // this.changeFlag = this.changeFlag.bind(this)
  }
  changeFlag =()=>{
    //TODO:为什么此处的 this 是 undefined
    this.setState(state=>(
      {
        textFlag:!state.textFlag
      }
    ))
  }
  render() {
    return (
      // TODO: onClick 绑定的函数 中的 this 不是应该指向 节点本身么?为什么是 undefined 呢?
      <h2 onClick={this.changeFlag}>今天天气很{this.state.textFlag ? "炎热" : '凉爽'}</h2>
    )
  }
}

console.log(new TextOne().render())
export default TextOne
