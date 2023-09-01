import React, { useEffect, useRef } from 'react';
import '@babylonjs/loaders/glTF';
import Babylon from '@/lib/babylon';

const VillageContainer = () => {
  const reactCanvas = useRef(null);

  const initBabylon = () => {
    const machine: Babylon = new Babylon({
      canvas: reactCanvas.current! as HTMLCanvasElement
    });
    machine.__init();

    return {
      destroy: machine.destroy
    };
  };

  useEffect(() => {
    const { destroy } = initBabylon();

    return () => {
      destroy();
    };
  }, []);

  return <canvas id="village" ref={reactCanvas} />;
};
export default React.memo(VillageContainer);
