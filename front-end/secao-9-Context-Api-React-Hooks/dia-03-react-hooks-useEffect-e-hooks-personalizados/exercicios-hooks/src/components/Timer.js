import React from 'react'
import useTimer from '../hooks/useTimer';

function Timer() {
  const { state } = useTimer();
  const {tempo, random} = state;
  const condição = random % 3 === 0 || random % 5 === 0;
  return (
    <div>
      <div>
        {random}
      </div>
      <div>
        {tempo}
      </div>
      <div>
        {condição && 'BINGO'}
      </div>
    </div>
  )
}

export default Timer
