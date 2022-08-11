import React from 'react';
import PropTypes from 'prop-types';

class EFormCargo extends React.Component {
  render() {
    const { handler, cargo, alerting } = this.props;
    return(
      <label>
        Cargo:
        <br></br>
        <textarea
          name='cargo'
          value={cargo}
          onChange={handler}
          maxLength="40"
          style={{ resize: "none", width: "250px", height: "35px"  }}
          onMouseEnter={alerting}
          />
      </label>
    )
  }
}

EFormCargo.propTypes = {
  handler: PropTypes.func.isRequired,
  cargo: PropTypes.string.isRequired,
};

export default EFormCargo;
