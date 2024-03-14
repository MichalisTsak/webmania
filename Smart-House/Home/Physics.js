import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import * as CANNON from 'cannon-es';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );



const world = new CANNON.World({

  gravity: new CANNON.Vec3(0,-9.81,0)
});

const timeStep = 1/60;

function animate(){
  world.step(timeStep);
  groundMesh.position.copy(groundBody.position);
  groundMesh.quanternion.copy(groundBody.quanternion);

  renderer.render(scene, camera);
}
