import React from 'react';
import FormName from './FormName';
import FormEmail from './FormEmail';
import FormCPF from './FormCPF';
import FormEndereco from './FormEndereco';
import FormCidade from './FormCidade';
import FormEstado from './FormEstado';
import FormResidencia from './FormResidencia';
import EFormCurri from './EFormCurri';
import EFormCargo from './EFormCargo';
import EFormDescCargo from './EFormDescCargo';
import Submit from './Submit';
import FormConcluido from './FormConcluido';
import Limpar from './Limpar';


class Form extends React.Component{
  constructor() {
    super();
    this.state= {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      residencia: '',
      resume: '',
      cargo: '',
      cargoDesc: '',
      alerted: 'no',
      display: 'none',
    }
  }

  inicial = {
    name: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    residencia: '',
    resume: '',
    cargo: '',
    cargoDesc: '',
    alerted: 'no',
    display: 'none',
  }

  handler = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'name') value = event.target.value.toUpperCase();
    if (name === 'endereco') value = event.target.value.replace(/[^a-zA-Z0-9']/g, '');
    this.setState({ [name]: value })
  };

  hndlOnBlur = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'cidade' && value.match(/^\d/)) value = '';
    this.setState({ [name]: value })
  }

  hndlAlert = () => {
    if (this.state.alerted === 'no') {
      alert('Preencha com cuidado esta informação.');
      this.setState({ alerted: 'yes' })
    }
  }

  hndlDisplay = (event) => {
    event.preventDefault(); 
    this.state.display === 'none' ? this.setState({ display : 'block' }) : this.setState({ display: 'none' })
  }

  hndlClearState = (event) => {
    event.preventDefault();
    this.setState(this.inicial)
  }

  render() {
    return (
      <form>
        <div className='form' style={{ display: this.state.display === 'none' ? 'flex' : 'none' }}>
          <fieldset>
            Formulario
            <hr/>
            <FormName name={this.state.name} handler={this.handler} />
            <hr/>
            <FormEmail email={this.state.email} handler={this.handler} />
            <hr/>
            <FormCPF cpf={this.state.cpf} handler={this.handler}/>
            <hr/>
            <FormEndereco endereco={this.state.endereco} handler={this.handler} />
            <hr/>
            <FormCidade cidade={this.state.cidade} handler={this.handler} blur={this.hndlOnBlur}/>
            <hr/>
            <FormEstado estado={this.state.estado} handler={this.handler} />
            <hr/>
            <FormResidencia handler={this.handler} />
          </fieldset>
          <fieldset>
            <EFormCurri resume={this.state.resume} handler={this.handler} />
            <hr/>
            <EFormCargo cargo={this.state.cargo} handler={this.handler} alerting={this.hndlAlert} />
            <hr />
            <EFormDescCargo cargoDesc={this.state.cargoDesc} handler={this.handler} />
          </fieldset>
        </div>
        <FormConcluido state={this.state} />
        <div className='botoes'>
          <Limpar handler={this.hndlClearState}/>
          <Submit displa={this.hndlDisplay} state={this.state}/>
        </div>
      </form>
    );
  }
}

export default Form;
