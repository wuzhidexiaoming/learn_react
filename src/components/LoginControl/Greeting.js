import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";
function Greeting(props) {
  let isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default Greeting;
