import React from 'react';

class Submit extends React.Component{
  render() {
    const { displa, state } = this.props;
    const entries = Object.values(state).includes('')
    return(
        <button
          type='submit'
          className='btnSubmit'
          onClick={displa}
          style={{ display: state.display === 'none' ? 'flex' : 'none'  }}
          disabled={entries}
        >
          Enviar
        </button>
    )
  }
}

export default Submit;
