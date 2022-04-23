import React from 'react'
import './App.css';
import Input from './Input.jsx'
import Texto from './Texto';

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state = {
      name: '',
      email: '',
      comentario: '',
      preferencia: '',
      fixa: 'false',
      errado: ''
    }
  }

  handleError() {
    const {name, email, comentario} = this.state
    const erros = [
      comentario.length > 50,
      name.length < 1,
      email.length < 1,
      !email.includes('@')
    ];
    const verify = erros.some((erro) => erro === true)
    this.setState({
      errado: verify,
    })
  }

  handleChange({target}) {
    const { value, name, checked } = target
    const v = target.type === 'checkbox'? checked : value
    this.setState({
      [name]: v,
    }, () => {this.handleError()});
  }


  render() {
    // const {name, email, comentario, preferencia, fixa} = this.state
    const {comentario} = this.state;
    return (
      <div className="formbox">
        <form className="formulario" >
          <fieldset>
            <legend>Usuário</legend>
            <Input 
            name={'name'} 
            titulo={'Nome'}
            callback={this.handleChange}
            />
            <Input 
            name={'email'} 
            titulo={'Email'}
            callback={this.handleChange}
            />
          </fieldset>
        
          <fieldset>
            <legend>Opções</legend>
            <Texto 
            name={'comentario'} 
            titulo={'Comentário'}
            callback={this.handleChange}
            erro={comentario}
            />

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