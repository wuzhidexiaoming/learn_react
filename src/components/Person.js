import React from "react";

class Person extends React.Component {
  constructor(props) {
    // 是否书写 构造函数和 super(props) 看是否需要在构造函数中使用 this.props
    super(props);
    console.log(props === this.props); //true
  }
  render() {
    console.log("Person", this);
    const { name, age, sex } = this.props;
    const { changeSex } = this;
    return (
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li onClick={changeSex}>{sex}</li>
      </ul>
    );
  }
  changeSex = () => {
    console.log(this.props);
    // Cannot assign to read only property 'sex' of object '#<Object>
    // 无法分配为只读对象'＃<Object>的属性'sex'
    // this.props.sex = "未知";
  };
}
export default Person;
