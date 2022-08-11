import React from 'react';
import PropTypes from 'prop-types';

class FormConcluido extends React.Component{
  render() {
    const { state } = this.props;
      return(
        <div style={{display: state.display}} >
          {Object.entries(state).map((estado) => {
            if (estado[0] === 'alerted') return '';
            if (estado[0] === 'display') return '';
            if (estado[0] === 'resume') estado[0] = 'Resumo do currículo';
            if (estado[0] === 'cargoDesc') estado[0] = 'Descrição do cargo';
            if (estado[0] === 'name') estado[0] = 'Nome';
            if (estado[0] === 'endereco') estado[0] = 'Endereço';
            if (estado[0] === 'residencia') estado[0] = 'Residência';
            return (<div key={estado[0]}>
              {estado[0].charAt(0).toUpperCase() + estado[0].slice(1)}: {estado[1]}
              <hr/>
            </div>)
          })}
        </div>
      )
  }
}

FormConcluido.propTypes = {
  state: PropTypes.object.isRequired,
};

export default FormConcluido;
