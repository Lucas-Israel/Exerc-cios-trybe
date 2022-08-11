import React from "react";
import PropTypes from 'prop-types';

class FormEmail extends React.Component{
  render() {
    const { handler, email } = this.props;
    return(
      <label>
        Email:
        <br></br>
        <input type="email" name='email' value={email} onChange={handler}  maxLength="50">
        </input>
      </label>
    )
  }
}

FormEmail.propTypes = {
  handler: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default FormEmail;
