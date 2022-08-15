import { useEffect } from 'react';

export const useScript = (url: string, onLoad: (...args: any) => any) => {
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');

    script.src = url;
    script.onload = onLoad;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
};
