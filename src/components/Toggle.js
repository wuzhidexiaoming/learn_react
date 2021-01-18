import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggle: false
    }
  }

  changeFlag = () => {
    this.setState(() => ({
      isToggle: !this.state.isToggle
    }))
  }

  render() {
    return (
      <button onClick={this.changeFlag}>{this.state.isToggle ? "on" : 'off'}</button>
    )
  }
}

export default Toggle
