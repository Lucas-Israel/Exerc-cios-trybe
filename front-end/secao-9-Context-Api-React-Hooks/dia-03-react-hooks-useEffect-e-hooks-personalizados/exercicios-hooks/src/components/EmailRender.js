import React, {useEffect} from 'react'
import { READ } from '../constants/index'

function EmailRender({ emails }) {
  const { email, changeRead } = emails;

  useEffect(() => {
    const allRead = email.every(({status}) => status === READ);
    allRead && setTimeout(() => alert('Parabéns! Você leu todas suas mensagens!'), 10)
  }, [email])
  
  return (
    <div>
      <ul>
        {email.map(({id, status, title}) =>
          <div key={id+title}>
            <li
              key={id}
              style={ { color: status === 0 ? 'white' : 'red' } }
            >
              {title}
              </li>
              <button type='button' onClick={() => changeRead(id, 1)}>Marcar como lido</button>
              <button type='button' onClick={() => changeRead(id, 0)}>Marcar como não lido</button>
          </div>
        )}
      </ul>
    </div>
  )
}

export default EmailRender;
