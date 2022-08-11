import React from "react";
import PropTypes from 'prop-types';

class FormName extends React.Component{
  render() {
    const { handler, name } = this.props;
    return(
        <label>
          Nome:
          <br></br>
          <input type="text" name="name" value={name} onChange={handler}  maxLength="40">
          </input>
        </label>
    )
  }
}

FormName.propTypes = {
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormName;
