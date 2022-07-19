import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  render () {
    return (
     <div className='cards'>
      {data.map((element) => <Pokemon key={element.id} element={element}/>)}
     </div>
    );
  }
}

export default Pokedex;