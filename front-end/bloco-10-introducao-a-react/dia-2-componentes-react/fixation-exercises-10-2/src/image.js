import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    return <img key={this.props.alternativeText} className='icon' src={this.props.source} alt={this.props.alternativeText} />;
  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
};

Image.defaultProps = {
  source: '',
  alternativeText: 'Não tem imagem'
};

export default Image;