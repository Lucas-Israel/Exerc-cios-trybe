import React from "react";
import PropTypes from 'prop-types';
import estados from "../estados";

class FormEstado extends React.Component{
  render() {
    const { handler, estado } = this.props;
    return(
      <label>
        Estado:
        <br></br>
        <select
          name='estado'
          value={estado}
          onChange={handler}
          maxLength="28">
            {estados.map((estado) =>
              <option key={Object.keys(estado)}>
                {`${Object.keys(estado)} ${Object.values(estado)}`}
              </option>
            )}
        </select>
      </label>
    )
  }
}

FormEstado.propTypes = {
  handler: PropTypes.func.isRequired,
  estado: PropTypes.string.isRequired,
};

export default FormEstado;
