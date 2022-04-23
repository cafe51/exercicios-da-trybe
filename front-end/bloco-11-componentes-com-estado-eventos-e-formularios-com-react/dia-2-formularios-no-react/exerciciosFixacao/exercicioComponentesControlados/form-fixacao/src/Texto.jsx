import React from "react";

class Texto extends React.Component {
  render() {
    const {callback, name, titulo, erro } = this.props
    let erroMsg = undefined;
    if (erro.length > 30) erroMsg = 'Texto muito grande';
    if (erro.length > 50) erroMsg = 'Pare imediatamente';
    
    return (
      <div>
        <label>
          {titulo}:
          <textarea 
          name={name} 
          // value={comentario}
          onChange={callback}
          ></textarea>
        </label>
        <span id='pequeno'>{erroMsg}</span>
        {/* <span id='medio'>{erroMsg}</span>
        <span id='grande'>{erroMsg}</span>
        <span id='pare'>{erroMsg}</span> */}
      </div>
      
    )
  }
}

export default Texto