import React from 'react'

class Input extends React.Component {
  render() {
    const {titulo, name, onchange} = this.props
    return (
      <div>
        <label> {titulo}
        <input 
        name={name}
        onChange={onchange}
        type='text'>
        </input>
        </label>

    </div>
    )
  }
}

export default Input;