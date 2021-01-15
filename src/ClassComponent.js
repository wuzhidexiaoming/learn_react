import * as React from "react";

class classComponent extends React.Component{
  render() {
    console.log(this)
    return(
      <h2>测试类组件</h2>
    )
  }
}

export default classComponent
