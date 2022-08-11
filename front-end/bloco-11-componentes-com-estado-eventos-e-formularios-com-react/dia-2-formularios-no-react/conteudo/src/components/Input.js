import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { value0, value1, input } = this.props;
    let error = undefined;
    if (value0.length >= 40 || value1.length >= 40) error = "texto muito grande"
    return(
      <fieldset>
        <label>
          Inputs
          <br></br>
          <input value={value0} onChange={(event) => input('input0', event)}/>
          <input value={value1} onChange={(event) => input('input1', event)}/>
        </label>
      <span className="error" >{ !value0.length || !value1.length ? error : ''}</span>
      </fieldset>
    )
  }
}

Input.propTypes = {
  input: PropTypes.func.isRequired,
  value0: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
};

export default Input;
