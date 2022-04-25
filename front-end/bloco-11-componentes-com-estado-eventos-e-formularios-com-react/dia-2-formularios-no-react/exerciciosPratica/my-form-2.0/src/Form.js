import React from 'react'
import Input from './Input';

class Form extends React.Component {
  constructor() {
    super()
    this.handleSend = this.handleSend.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      div: '',
      nome: 'Japhé',
      email: '',
      cpf: '',
      cidade: '',
      estado: '',
    }
  
  }

  handleChange({target}){
    // console.log(target.name)
    const {name, value } = target
    this.setState ({
      [name]: value,
    })
  }

  handleSend() {
    this.setState ({
      div: <div>
            <p>olá {this.state.nome}</p>
            <p> seru email é {this.state.email} </p>
           </div>
    })
    // return this.formulario
  }

  render() {
    
    return (
      <div className="App">
        <form>
          <fieldset>
            <legend> Dados pessoais </legend>
            <Input titulo='Nome' name='nome' onchange={this.handleChange}/>
            <Input titulo='Email' name='email' onchange={this.handleChange}/>
            <Input titulo='CPF' name='cpf' onchange=''/>
            <Input titulo='Cidade' name='cidade' onchange=''/> 
            <Input titulo='Estado' name='estado' onchange=''/>
            <div>
            <input type='radio' name='radio' id='casa'/> 
            <label for='casa'>Casa</label>
            </div>
            <div>
            <input type='radio' name='radio' id='apartamento'/>
            <label for='apartamento'>Apartamento</label>
            </div>
          </fieldset>

          <fieldset>
          <legend> Dados do seu último emprego </legend>
          <label>Resumo do currículo</label>
          <textarea></textarea>
          <label>Cargo</label>
          <textarea></textarea>
          <label>Descrição do cargo</label>
          <textarea></textarea>
          </fieldset>
          <input type='button' value='Enviar' onClick={this.handleSend}/>
          <input type='button' value='Limpar'/>
        </form>
        <div>
          {this.state.div}
        </div>
    </div>
    )
  }
}

export default Form;