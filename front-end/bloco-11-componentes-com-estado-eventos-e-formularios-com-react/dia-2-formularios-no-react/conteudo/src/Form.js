import React from 'react';
import Select from './components/Select';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Checkbox from './components/Checkbox';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      select: '',
      input0: '',
      input1: '',
      area: '',
      checkbox: '',
      formularioComErros: false,
    }
  }

  handlerError = () => {
    const error = document.querySelector('.error');
    this.setState({
      formularioComErros: error.innerText.length > 0 ? true : false,
    })
  }

  input = (param1, param2) => {
    this.setState({
      [param1]: param1 === 'checkbox' ? param2.target.checked : param2.target.value,
    }, () => {this.handlerError(); });
  }

  render() {
    return(
      <section>
        <form>
          <Select value={this.state.select} input={this.input}/>
          <Input value0={this.state.input0} value1={this.state.input1} input={this.input}/>
          <TextArea value={this.state.area} input={this.input}/>
          <Checkbox input={this.input}/>
        </form>
      </section>
    )
  }
}

export default Form;