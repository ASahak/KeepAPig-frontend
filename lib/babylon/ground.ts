import { BehaviorSubject } from 'rxjs';
import * as BABYLON from '@babylonjs/core';
import { IGroundConstructor } from './types';

export class Ground {
  protected ground: any;
  private readonly scene: BABYLON.Scene;
  private readonly isReadyObserver: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(props: IGroundConstructor) {
    this.scene = props.scene;
  }

  __init() {
    this.ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 5, height: 5, subdivisions: 0 }, this.scene);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), this.scene);
    light.intensity = 0.7;

    // Apply a texture to the ground
    const groundMaterial = new BABYLON.StandardMaterial('groundMaterial', this.scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture('https://www.babylonjs-playground.com/textures/grass.jpg', this.scene);
    this.ground.material = groundMaterial;
    this.isReadyObserver.complete();
  }

  get isReady() {
    return this.isReadyObserver;
  }
}
