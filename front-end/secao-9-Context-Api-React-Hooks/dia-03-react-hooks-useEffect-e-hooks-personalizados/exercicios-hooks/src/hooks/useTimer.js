import { useEffect, useState } from "react";

const DELAY = 1000;

const INITITAL = {
  tempo: 1,
  random: 1,
}

function useTimer() {
 const [state, setState] = useState(INITITAL);

 const timerInterval = () => setState((before) => ({
  ...before,
  tempo: before.tempo + 1,
 }));

 const randomizer = () => Math.floor(Math.random() * 101);

 useEffect(() => {
  state.tempo === 11 && setState((before) => ({...before, tempo: 1, random: randomizer()}));
  const tick = setInterval(timerInterval, DELAY);
  return () => clearInterval(tick);
 }, [state]);

 return { state }
}

export default useTimer;
