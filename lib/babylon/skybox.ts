import { SkyMaterial } from '@babylonjs/materials';
import * as BABYLON from '@babylonjs/core';
import { ISkyBoxConstructor } from './types';
import { isDayOrNight } from './utils';

export class Skybox {
  protected skybox: any;
  private readonly scene: BABYLON.Scene;

  constructor(props: ISkyBoxConstructor) {
    this.scene = props.scene;
    this.skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 1000.0 }, this.scene);
  }

  __init() {
    const skyboxMaterial = new SkyMaterial('skyMaterial', this.scene);
    skyboxMaterial.backFaceCulling = false;
    this.skybox.material = skyboxMaterial;

    isDayOrNight().subscribe((isDaytime) => {
      if (isDaytime) {
        this.setSkyConfig('material.inclination', skyboxMaterial.inclination, 0);
      } else {
        this.setSkyConfig('material.inclination', 0, -0.5);
      }
    });
  }

  private setSkyConfig(property: string, from: number, to: number) {
    const keys = [
      { frame: 0, value: from },
      { frame: 100, value: to }
    ];

    const animation = new BABYLON.Animation('animation', property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    animation.setKeys(keys);

    this.scene.stopAnimation(this.skybox);
    this.scene.beginDirectAnimation(this.skybox, [animation], 0, 100, false, 1);
  }
}
