import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import { SkyMaterial } from '@babylonjs/materials';
import Babylon from '@/lib/babylon';

// import meshModel from '@/babylon/meshes/pig.glb';

let box: any;
const onSceneReady = async (scene: any) => {
  //This creates an arcRotate camera
  const camera = new BABYLON.ArcRotateCamera('camera', BABYLON.Tools.ToRadians(128), BABYLON.Tools.ToRadians(75), 5, BABYLON.Vector3.Zero(), scene);
  const canvas = scene.getEngine().getRenderingCanvas();
  // // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // scene.clearColor = new Color3(0.2, 0.59, 0.67);

  // scene.createDefaultEnvironment()
  const skyboxMaterial = new SkyMaterial('skyMaterial', scene);
  skyboxMaterial.backFaceCulling = false;

  // const skyMaterial = new BABYLON.StandardMaterial("skybox", scene);
  // skyMaterial.backFaceCulling = false;
  // skyMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
  // skyMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  // skyMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  // skyMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  //

  const skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 1000.0 }, scene);
  skybox.material = skyboxMaterial;

  // const skyMaterial = new SkyMaterial("skyMaterial", scene);
  // skyMaterial.backFaceCulling = false;
  //
  // const skybox = MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene);
  // skybox.material = skyMaterial;

  //
  // //This creates a direction light
  // var dirLight = new DirectionalLight("dirLight", new Vector3(0.25, -1, -1), scene);
  // dirLight.intensity = 1.5;
  //
  // SceneLoader.ImportMesh("", "https://rawcdn.githack.com/mrdoob/three.js/36f9f34752a985359e2556c68a52234436cefdfa/examples/models/gltf/RobotExpressive/", "RobotExpressive.glb", scene, function (newMeshes) {
  // newMeshes[0].getChildMeshes()[0].metadata = "cannon";

  // scene.onPointerDown = function castRay(){
  //     var ray = scene.createPickingRay(scene.pointerX, scene.pointerY, BABYLON.Matrix.Identity(), camera);

  //     var hit = scene.pickWithRay(ray);

  //     if (hit.pickedMesh && hit.pickedMesh.metadata == "cannon"){
  //         createGUIButton();
  //     }
  // }
  // });
  // return

  // // var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  // // camera.setTarget(Vector3.Zero());
  // const canvas = scene.getEngine().getRenderingCanvas();
  // // camera.attachControl(canvas, true);
  // // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  // var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  // // Default intensity is 1. Let's dim the light a small amount
  // light.intensity = 0.7;
  // // Our built-in 'box' shape.
  // // MeshBuilder.CreateBox('box', { size: 2 }, scene);
  // // Move the box upward 1/2 its height
  // // box.position.y = 1;
  // // Our built-in 'ground' shape.
  //
  // const camera = new ArcRotateCamera("Camera", 0, 0.8, 10, Vector3.Zero(), scene);
  // camera.attachControl(canvas, false);
  //
  // SceneLoader.ImportMesh("", "https://rawcdn.githack.com/mrdoob/three.js/36f9f34752a985359e2556c68a52234436cefdfa/examples/models/gltf/RobotExpressive/", "RobotExpressive.glb", scene, function (newMeshes) {
  //
  //   var mesh = scene.meshes[0];
  //
  //   mesh.position.y  =  -2.5;
  //   //mesh.position.z  =  2.5;
  //   mesh.rotation  = new Vector3(0, Math.PI/2, 0);
  //   //mesh.scaling = new BABYLON.Vector3(2, 2, 2);
  //   // camera.lookAt(mesh);
  //
  //   scene.activeCamera = null;
  //   scene.createDefaultCameraOrLight(true);
  //   scene.activeCamera.attachControl(canvas, false);
  //
  // })
  // // const importResult = await SceneLoader.ImportMeshAsync("", "", meshModel,  scene, function (meshes) {
  // //   scene.createDefaultCameraOrLight(true, true, true);
  // //   scene.createDefaultEnvironment();
  // //
  // // }, '.glb');
  // // importResult.meshes[0].scaling.scaleInPlace(10);
  //
  //
  // MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene);
};
/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: any) => {
  if (box !== undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime();
    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};
const VillageContainer = () => {
  const reactCanvas = useRef(null);

  const initBabylon = () => {
    const machine: Babylon = new Babylon({
      canvas: reactCanvas.current! as HTMLCanvasElement
    });
    machine.__init();
  };

  useEffect(() => {
    initBabylon();

    //
    // const engine = new BABYLON.Engine(reactCanvas.current, true, {});
    // const scene = new BABYLON.Scene(engine, {});
    // if (scene.isReady()) {
    //   onSceneReady(scene);
    // } else {
    //   scene.onReadyObservable.addOnce(onSceneReady);
    // }
    // engine.runRenderLoop(() => {
    //   onRender(scene);
    //   scene.render();
    // });
    // const resize = () => {
    //   scene.getEngine().resize();
    // };
    // if (window) {
    //   window.addEventListener('resize', resize);
    // }
    // return () => {
    //   scene.getEngine().dispose();
    //   if (window) {
    //     window.removeEventListener('resize', resize);
    //   }
    // };
  }, []);

  return <canvas id="village" ref={reactCanvas} />;
};
export default React.memo(VillageContainer);
