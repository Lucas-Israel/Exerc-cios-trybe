import React from "react";
import PropTypes from 'prop-types';

class FormResidencia extends React.Component{
  render() {
    const { handler } = this.props;
    return(
      <label>
        Residência:
        <br></br>
        <label htmlFor="house">
          <input
            type="radio"
            id="house"
            name='residencia'
            value='Casa'
            onChange={handler}>
          </input>
          Casa
        </label>
        <br></br>
        <label htmlFor="apart">
          <input
            type="radio"
            id="apart"
            name='residencia'
            value='Apartamento'
            onChange={handler}>
          </input>
          Apartamento
        </label>
      </label>
    )
  }
}

FormResidencia.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default FormResidencia;
