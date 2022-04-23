import React from "react";

class Input extends React.Component {
  render() {
    const {callback, name, titulo } = this.props
    return (
      <label>
        {titulo}:
        <input 
        name={name}
        type="text" 
        // value={name} 
        onChange={callback}
        ></input>
      </label>
    )
  }
}

export default Input