import React from 'react';
import PropTypes from 'prop-types';

class EFormDescCargo extends React.Component {
  render() {
    const { handler, cargoDesc } = this.props;
    return(
      <label>
        Descrição do cargo:
        <br></br>
        <textarea
          name='cargoDesc'
          value={cargoDesc}
          onChange={handler}
          maxLength="1000"
          style={{ resize: "none", width: "250px", height: "70px"  }}
          />
      </label>
    )
  }
}

EFormDescCargo.propTypes = {
  handler: PropTypes.func.isRequired,
  cargoDesc: PropTypes.string.isRequired,
};

export default EFormDescCargo;
