import { useRef } from 'react';

const useLiveStates = (value: any) => {
  const state = useRef(null);
  state.current = value;

  return state;
};
export default useLiveStates;
