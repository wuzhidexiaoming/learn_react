import "./App.css";
// import Test from './Test'
// import ClassComponent from './ClassComponent'
import TextOne from "./components/TextOne";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LearnJudgment from "./components/LearnJudgment";
import LoginControl from "./components/LoginControl/index";
import TestRoute from "./components/TestRoute/TestRoute";
function App() {
  return (
    <div className="App">
      <div>
        TextOne: <TextOne />
      </div>
      <div>
        Clock: <Clock />
      </div>
      <div>
        Toggle:
        <Toggle />
      </div>
      <div>
        LearnJudgment
        <LearnJudgment />
      </div>
      <div>
        LoginControl
        <LoginControl />
      </div>
      <div>
        TestRoute
        <TestRoute />
      </div>
    </div>
  );
}

export default App;
