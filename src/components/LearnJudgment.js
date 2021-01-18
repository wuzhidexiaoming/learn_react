import React from 'react'
import Test from "../Test";
class LearnJudgment extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      test:<Test/>
    }
  }
  render(){
    return <div>{this.state.test}</div>
  }
}
export default LearnJudgment
