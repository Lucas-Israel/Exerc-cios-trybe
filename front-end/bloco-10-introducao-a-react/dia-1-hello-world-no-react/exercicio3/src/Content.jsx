import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
  render() {
    return (
        conteudos.map(({ conteudo, bloco, status }, index) => 
        <div className='card' key={index}>
          <div className='card2'>
            <p className='parag'>O conteúdo é: {conteudo}</p>
            <p className='parag'>Status: {status}</p>
            <p className='parag'>Bloco: {bloco}</p>
          </div>
        </div>
        )
    )
  }
}
export default Content;
