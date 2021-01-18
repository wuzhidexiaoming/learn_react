import React from "react";
import Greeting from "./Greeting";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this, "test");
  }
  handleLoginClick(event) {
    console.log(event);
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick(text, event) {
    console.log(event);
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton handleLogout={this.handleLogoutClick} />;
    } else {
      button = <LoginButton handleLogin={this.handleLoginClick} />;
    }
    return (
      <div>
        {button}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}
function LoginButton(props) {
  return <button onClick={props.handleLogin}>登录</button>;
}
function LogoutButton(props) {
  return <button onClick={props.handleLogout}>退出</button>;
}
export default LoginControl;
