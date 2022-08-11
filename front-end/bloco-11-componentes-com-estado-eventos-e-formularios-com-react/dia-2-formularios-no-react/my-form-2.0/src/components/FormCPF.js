import React from "react";
import PropTypes from 'prop-types';

class FormCPF extends React.Component{
  render() {
    const { handler, cpf } = this.props;
    return(
      <label>
        CPF:
        <br></br>
        <input type="text" name='cpf' value={cpf} onChange={handler}  maxLength="11">
        </input>
      </label>
    )
  }
}

FormCPF.propTypes = {
  handler: PropTypes.func.isRequired,
  cpf: PropTypes.string.isRequired,
};

export default FormCPF;
