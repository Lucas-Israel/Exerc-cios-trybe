import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.element
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='card'>
        <div key={id}>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <img src={image} alt={name} className='pokeImg' />
      </div>
    )
  }
};

export default Pokemon;