import React, { MutableRefObject, useEffect, useState, useRef } from 'react';
import { ComponentPropsType } from './types';

const Loadable: React.FC<ComponentPropsType> = ({ isReady, minDelay = 300, emitLoaded, Fallback, Component }) => {
  const [isLoaded, setIsLoaded] = useState(isReady);
  const isLoadedAtFirst = useRef(isReady);
  const time: MutableRefObject<{ s: number; e: number }> = useRef({
    s: 0,
    e: 0
  });

  useEffect(() => {
    time.current.s = new Date().getTime();
  }, []);

  useEffect(() => {
    let _t: ReturnType<typeof setTimeout> | null = null;
    let { s, e } = time.current;
    if (isReady === undefined && minDelay) {
      _t = setTimeout(() => {
        setIsLoaded(true);
        emitLoaded?.();
      }, minDelay);
    } else {
      if (isReady && !isLoadedAtFirst.current) {
        e = new Date().getTime();
        if (e !== s && e - s < minDelay) {
          _t = setTimeout(() => {
            setIsLoaded(true);
            emitLoaded?.();
          }, minDelay - (e - s));
        } else {
          setIsLoaded(true);
          emitLoaded?.();
        }
      }
    }

    return () => {
      _t && clearTimeout(_t);
    };
  }, [isReady]);

  return isLoaded ? Component : Fallback;
};
export default React.memo(Loadable);
