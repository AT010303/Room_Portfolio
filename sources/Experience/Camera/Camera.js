import * as THREE from 'three';
import Experience from '../Experience';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import EventEmitter from '../Utils/EventEmitter';

export default class Camera extends EventEmitter {

    constructor(){
        super();

        this.experience = new Experience();
        this.config = this.experience.config;
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.scene = this.experience.scene;
        this.renderer = this.experience.renderer;

        this.position = new THREE.Vector3(0, 0, 0);
        this.focalPoint = new THREE.Vector3(0, 0, 0);

        this.freeCam = false;

        this.keyframes = {
            
        }
    }
}