import React from "react"

class Select extends React.Component {
  state={
    // TODO:如果是不存在的默认值,有没有办法在页面加载的时候自动修复
    value:2
  }
  handleChange=(event)=>{
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <select  value={this.state.value}  onInput={this.handleChange}>
        <option value="">请选择</option>
        <option value={0}>小红</option>
        <option value={1}>小名</option>
        <option value={2}>小白</option>
      </select>
    )
  }
}

export default Select
