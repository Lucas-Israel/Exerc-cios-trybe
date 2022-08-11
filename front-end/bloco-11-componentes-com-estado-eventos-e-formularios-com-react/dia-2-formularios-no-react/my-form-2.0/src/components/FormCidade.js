import React from "react";
import PropTypes from 'prop-types';

class FormCidade extends React.Component{
  render() {
    const { handler, cidade, blur } = this.props;
    return(
      <label>
        Cidade:
        <br></br>
        <input
          type="text"
          name='cidade'
          value={cidade}
          onBlur={blur}
          onChange={handler}
          maxLength="28">
        </input>
      </label>
    )
  }
}

FormCidade.propTypes = {
  handler: PropTypes.func.isRequired,
  cidade: PropTypes.string.isRequired,
  blur: PropTypes.func.isRequired,
};

export default FormCidade;
