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
            idle: new IdleKeyframe(),
            desktop: new DesktopKeyframe(),
            loading: new LoadingKeyframe(),
            desk: new DeskKeyframe(),
            orbitControlsStart: new OrbitControlsStart(),
        }

        document.addEventListener('mousedown', (event) => {
            event.preventDefault();
            // @ts-ignore
            if (event.target.id === 'prevent-click') return;
            // print target and current keyframe
            if (
                this.currentKeyframe === CameraKey.IDLE ||
                this.targetKeyframe === CameraKey.IDLE
            ) {
                this.transition(CameraKey.DESK);
            } else if (
                this.currentKeyframe === CameraKey.DESK ||
                this.targetKeyframe === CameraKey.DESK
            ) {
                this.transition(CameraKey.IDLE);
            }
        });
    }
}