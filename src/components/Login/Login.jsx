import React from "react";
// TODO: 这样实现 数据控制在 state 中也太麻烦了吧,每个表单都是一个方法
class Login extends React.Component {
  state = {
    username: "默认用户名",
    password: "",
    files: [],
  };
  /**
   *
   * @param e event对象
   */
  saveUsername = (e) => {
    this.setState(() => ({
      username: e.target.value,
    }));
  };
  saveFiles = (e) => {
    console.log(e.target.files[0]);
  };

  savePassword = (e) => {
    this.setState(() => ({
      password: e.target.value,
    }));
  };
  saveFormItem = (formItem) => {
    return (event) => {
      this.setState(() => ({
        [formItem]: event.target.value,
      }));
    };
  };
  handleSubmit = () => {
    let { username, password } = this.state;
    console.log(username, password);
  };
  render() {
    const { username } = this.state;
    return (
      <div>
        <input
          onChange={this.saveFormItem("username")}
          defaultValue={username}
          placeholder={"请输入用户名"}
        />
        <input
          type={"password"}
          onChange={this.saveFormItem("password")}
          placeholder={"请输入密码"}
        />
        <input type={"file"} onChange={this.saveFiles} />
        <button onClick={this.handleSubmit}>提交</button>
      </div>
    );
  }
}

export default Login;
