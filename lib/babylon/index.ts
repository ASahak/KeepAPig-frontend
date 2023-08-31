import * as BABYLON from '@babylonjs/core';
import { IBabylonProps } from './types';
import { Skybox } from './skybox';

class Babylon {
  private readonly canvas: HTMLCanvasElement;
  private readonly scene: BABYLON.Scene;
  private readonly engine: BABYLON.Engine;

  constructor({ canvas }: IBabylonProps) {
    this.canvas = canvas;
    this.engine = new BABYLON.Engine(this.canvas, true, {});
    this.scene = new BABYLON.Scene(this.engine, {});
  }

  __init() {
    this.attachRects();
    this.runEngine();
    this.createSkyMaterial();
  }

  private runEngine() {
    this.engine.runRenderLoop(() => {
      // onRender(scene);
      this.scene.render();
    });
  }

  private createSkyMaterial() {
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(5, 4, -47), this.scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.canvas, true);
    const skybox: Skybox = new Skybox({ scene: this.scene });
    skybox.__init();
  }

  private attachRects() {
    if (this.canvas) {
      this.canvas.setAttribute('width', document.body.clientWidth + 'px');
      this.canvas.setAttribute('height', document.body.clientHeight + 'px');
    }
  }
}

export default Babylon;
