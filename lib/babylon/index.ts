import * as BABYLON from '@babylonjs/core';
import { forkJoin } from 'rxjs';
import { IBabylonProps } from './types';
import { Skybox } from './skybox';
import { ScreenLoader } from './screenLoader';

class Babylon {
  private readonly canvas: HTMLCanvasElement;
  private readonly scene: BABYLON.Scene;
  private readonly engine: BABYLON.Engine;
  private readonly skybox: Skybox;

  constructor({ canvas }: IBabylonProps) {
    this.canvas = canvas;
    this.engine = new BABYLON.Engine(this.canvas, true, {});
    this.scene = new BABYLON.Scene(this.engine, {});
    this.skybox = new Skybox({ scene: this.scene });
    this.engine.loadingScreen = new ScreenLoader();
  }

  __init() {
    this.waitAllReadyObservers();
    this.runLoader();
    this.attachRects();
    this.runEngine();
    this.registerEvents();
  }

  private waitAllReadyObservers() {
    forkJoin([this.skybox.isReady]).subscribe({
      complete: () => {
        this.engine.hideLoadingUI();
      }
    });
  }

  private runLoader() {
    this.engine.displayLoadingUI();
  }

  private resize = () => {
    this.scene.getEngine().resize();
  };

  private registerEvents() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.resize);
    }
  }

  private runEngine() {
    if (this.scene.isReady()) {
      this.onSceneReady();
    } else {
      this.scene.onReadyObservable.addOnce(this.onSceneReady.bind(this));
    }

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  private onSceneReady() {
    this.createSkyMaterial();
  }

  private createSkyMaterial() {
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(5, 4, -47), this.scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.canvas, true);
    this.skybox.__init();
  }

  private attachRects() {
    if (this.canvas) {
      this.canvas.setAttribute('width', document.body.clientWidth + 'px');
      this.canvas.setAttribute('height', document.body.clientHeight + 'px');
    }
  }

  destroy() {
    if (this.scene) {
      this.scene.getEngine().dispose();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resize);
    }
    this.engine.hideLoadingUI();
  }
}

export default Babylon;
