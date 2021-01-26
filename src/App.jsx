import React from "react";
import "./App.css";
import Test from "./Test";
// import ClassComponent from './ClassComponent'
import TextOne from "./components/TextOne";
// import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
// import LearnJudgment from "./components/LearnJudgment";
// import LoginControl from "./components/LoginControl/index";
import TestRoute from "./components/TestRoute/TestRoute";
// import PersonSup from "./components/PersonSup";
import FunctionCom from "./components/FunctionCom";
// import Sup from "./components/Sup/Sup";
import LearnRef from "./components/LearnRef";
// import Login from "./components/Login/Login";
// import Select from "./components/LearnForm/Select";
import Count from "./components/Count";
// TODO: 可以将 import 引入的东西 放到一个数组中么
const components = [
  <TextOne />,
  // <Clock />,
  <Toggle />,
  // <LearnJudgment />,
  // <LoginControl />,
  <TestRoute />,
  // <PersonSup />,
  <FunctionCom />,
  // <Sup />,
  <LearnRef />,
  // <Login />,
  // <Select />,
  <Count />,
];
console.log(components);
function App() {
  return (
    <div className="App">
      {components.map((component) => {
        return (
          <div
            key={component.type.name}
            style={{
              marginBottom: "20px",
              backgroundColor: "#9ecfe9",
              padding: "10px 0",
            }}
          >
            <div className={"component-name"}>{component.type.name}</div>
            <div>{component}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
