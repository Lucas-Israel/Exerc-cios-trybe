import React from "react";
import PropTypes from 'prop-types';

class FormEndereco extends React.Component{
  render() {
    const { handler, endereco } = this.props;
    return(
      <label>
        Endereço:
        <br></br>
        <input type="text" name='endereco' value={endereco} onChange={handler}  maxLength="200">
        </input>
      </label>
    )
  }
}

FormEndereco.propTypes = {
  handler: PropTypes.func.isRequired,
  endereco: PropTypes.string.isRequired,
};

export default FormEndereco;
