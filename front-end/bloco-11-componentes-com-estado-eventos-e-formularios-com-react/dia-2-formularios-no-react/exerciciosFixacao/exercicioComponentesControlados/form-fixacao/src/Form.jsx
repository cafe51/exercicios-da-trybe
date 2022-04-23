import React from 'react'
import './App.css';

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name: '',
      email: '',
      comentario: '',
      preferencia: '',
      fixa: 'false',
    }
  }

  handleChange({target}) {
    const { value, name, checked } = target
    const v = target.type === 'checkbox'? checked : value
    this.setState({
      [name]: v,
    })
    // console.log(event.target.value)
  }

  render() {
    // const {name, email, comentario, preferencia, fixa} = this.state
    return (
      <div className="formbox">
        <form className="formulario" >
          <fieldset>
            <legend>Usuário</legend>
            <label>
              Nome:
              <input 
              name='name'
              type="text" 
              // value={name} 
              onChange={this.handleChange}
              ></input>
            </label>

            <label>
              Email:
              <input 
              name='email' 
              type="text" 
              // value={email}
              onChange={this.handleChange}
              ></input>
            </label>
          </fieldset>
        
          <fieldset>
            <legend>Opções</legend>
              <label>
              Comentário:
              <textarea 
              name='comentario' 
              // value={comentario}
              onChange={this.handleChange}
              ></textarea>
            </label>

            <label >
              Preferência
              <select  
              name='preferencia' 
              // value={preferencia}
              onChange={this.handleChange}
              >
                <option value = 'Azul'> Azul </option>
                <option value = 'Verde'> Verde</option>
                <option value = 'Amarelo'> Amarelo</option>
                <option value='Batata'>Batata </option>
                <option value = 'Goiania'> Goiania</option>
              </select>
            </label>

            <label>
              Fixa?:
              <input 
              name='fixa' 
              type="checkbox"
              // value='checked'
              onChange={this.handleChange}
              ></input>
            </label>
          </fieldset>
        
        </form>
      </div>
      
    )
  }
}

export default Form;