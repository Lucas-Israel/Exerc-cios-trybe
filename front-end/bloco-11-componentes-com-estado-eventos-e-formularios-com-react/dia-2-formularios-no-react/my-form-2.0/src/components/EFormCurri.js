import React from 'react';
import PropTypes from 'prop-types';

class EFormCurri extends React.Component {
  render() {
    const { handler, resume } = this.props;
    return(
      <label>
        Resumo do currículo:
        <br></br>
        <textarea
          name='resume'
          value={resume}
          onChange={handler}
          maxLength="1000"
          style={{ resize: "none", width: "250px", height: "70px"  }}
          />
      </label>
    )
  }
}

EFormCurri.propTypes = {
  handler: PropTypes.func.isRequired,
  resume: PropTypes.string.isRequired,
};

export default EFormCurri;
