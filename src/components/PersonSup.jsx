import React from "react";
import Person from "./Person";
class PersonSup extends React.Component {
  render() {
    return (
      <div>
        {[
          { name: "xiaoming", age: 19, sex: "男" },
          { name: "xiaohong", age: 24, sex: "女" },
        ].map((person, index) => (
          <Person key={index} {...person} />
        ))}
      </div>
    );
  }
}

export default PersonSup;
