import * as BABYLON from '@babylonjs/core';

export interface IBabylonProps {
  canvas: HTMLCanvasElement;
}

export interface ISkyBoxConstructor {
  scene: BABYLON.Scene;
}

export interface IGroundConstructor {
  scene: BABYLON.Scene;
}
