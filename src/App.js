import "./App.css";
// import Test from './Test'
// import ClassComponent from './ClassComponent'
import TextOne from "./components/TextOne";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LearnJudgment from "./components/LearnJudgment";
import LoginControl from "./components/LoginControl/index";
import TestRoute from "./components/TestRoute/TestRoute";
import Person from "./components/Person";
import FunctionCom from "./components/FunctionCom";
import Sup from "./components/Sup/Sup";
import LearnRef from "./components/LearnRef";
// TODO: 可以将 import 引入的东西 放到一个数组中么
const route = [];
function App() {
  return (
    <div className="App">
      <div>
        <span className={"component-name"}>TextOne</span>: <TextOne />
      </div>
      <div>
        <span className={"component-name"}>Clock</span>: <Clock />
      </div>
      <div>
        <span className={"component-name"}>Toggle</span>:
        <Toggle />
      </div>
      <div>
        <span className={"component-name"}>LearnJudgment</span>
        <LearnJudgment />
      </div>
      <div>
        <span className={"component-name"}>LoginControl</span>
        <LoginControl />
      </div>
      <div>
        <span className={"component-name"}>TestRoute</span>
        <TestRoute />
      </div>
      <div>
        <span className={"component-name"}>Person</span>
        {[
          { name: "xiaoming", age: 19, sex: "男" },
          { name: "xiaohong", age: 24, sex: "女" },
        ].map((person) => (
          <Person key={person.name} {...person} />
        ))}
      </div>
      <div>
        <span className={"component-name"}>FunctionCom</span>
        <FunctionCom />
      </div>
      <div>
        <span className={"component-name"}>Sup</span>
        <Sup />
      </div>
      <div>
        <span>LearnRef</span>
        <LearnRef />
      </div>
    </div>
  );
}

export default App;
