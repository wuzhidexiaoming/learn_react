import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    console.log("挂在", this);
    // TODO:为什么生命周期中使用 setInterval 直接已一个函数作为回调函数时,其中的 this 指向 window?
    // this.timerId = setInterval(this.tick,1000)
    this.timerId = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <p>时间:{this.state.date.toLocaleTimeString()}</p>;
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
}
export default Clock;
