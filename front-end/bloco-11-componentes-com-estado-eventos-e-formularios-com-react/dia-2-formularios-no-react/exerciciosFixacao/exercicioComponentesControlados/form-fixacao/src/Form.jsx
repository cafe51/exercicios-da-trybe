import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: 'saa',
      email: '23',
    }
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
    // console.log(event.target.value)
  }

  render() {
    const {name, email} = this.state
    return (
      <form>
        <label>
          Nome:
          <input type="text" value={name} onChange={this.handleChange}></input>
        </label>
        <label>
          Email:
          <input type="text" value={email}></input>
        </label>
      </form>
    )
  }
}

export default Form;