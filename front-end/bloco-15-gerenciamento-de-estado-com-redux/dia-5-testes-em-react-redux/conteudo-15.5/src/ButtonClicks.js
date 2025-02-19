// src/ButtonClicks.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import addClick from './actions';

class ButtonClicks extends React.Component {
  render() {
    const { add } = this.props;
    return (
      <div>
        <button type="button" onClick={ add }>Clique aquiiii</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch(addClick())});

ButtonClicks.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonClicks);