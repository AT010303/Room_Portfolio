import * as THREE from 'three';
import Experience from './Experience.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
export default class Camera {
  constructor(_options) {
    // Options
    this.experience = new Experience();
    this.config = this.experience.config;
    this.debug = this.experience.debug;
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.targetElement = this.experience.targetElement;
    this.scene = this.experience.scene;

    this.camInstance;

    // Set up
    // this.mode = 'default' // defaultCamera \ debugCamera
    // this.mode = 'debug' // defaultCamera \ debugCamera

    this.setInstance();
    // this.setModes()
    this.setControles();
    this.setCamAngle();
    this.setTransitions();

    // if(this.debug){
    //     this.debugFolder = this.debug.addFolder({
    //         title: 'camera',
    //         expanded: false
    //     })

    //     this.positionDebugFolder = this.debugFolder.addFolder({
    //         title: 'position',
    //         expanded: false
    //     })

    //     this.positionDebugFolder.addBinding(
    //         this.instance.position,
    //         'x',
    //         {label: 'x', min: -20, max: 20, step: 0.1}
    //     )
    //     this.positionDebugFolder.addBinding(
    //         this.instance.position,
    //         'y',
    //         {label: 'y', min: -20, max: 20, step: 0.1}
    //     )
    //     this.positionDebugFolder.addBinding(
    //         this.instance.position,
    //         'z',
    //         {label: 'z', min: -20, max: 20, step: 0.1}
    //     )

    //     this.targetDebugFolder = this.debugFolder.addFolder({
    //         title: 'cameraTarget',
    //         expanded: false
    //     })

    //     this.targetDebugFolder.addBinding(
    //         this.controls.target,
    //         'x',
    //         {label: 'x', min: -20, max: 20, step: 0.1}
    //     )

    //     this.targetDebugFolder.addBinding(
    //         this.controls.target,
    //         'y',
    //         {label: 'y', min: -20, max: 20, step: 0.1}
    //     )

    //     this.targetDebugFolder.addBinding(
    //         this.controls.target,
    //         'z',
    //         {label: 'z', min: -20, max: 20, step: 0.1}
    //     )

    //     this.debugFolder.addBinding(this.controls, 'enablePan')

    //     this.cam = false
    //     this.cameraToggle = {unlockCamera: false}
    //     this.debugFolder.addBinding(
    //         this.cameraToggle, 'unlockCamera'
    //     ).on('change',()=>{
    //         this.cam ? this.camAngle.default() : this.camAngle.unlocked()
    //     })
    // }
  }

  setInstance() {
    // Set up
    this.instance = new THREE.PerspectiveCamera(
      20,
      this.config.width / this.config.height,
      0.1,
      150
    );
    this.instance.rotation.reorder('YXZ');
    this.instance.position.set(50, 40, -15);

    this.scene.add(this.instance);
  }

  setControles() {
    this.controls = new OrbitControls(this.instance, this.targetElement);
    this.controls.enableDamping = true;
    this.controls.screenSpacePanning = true;
    this.controls.enablePan = true;
    this.controls.enableKeys = false;
    this.controls.rotateSpeed = 0.05;
    this.controls.target.z = -1;
    this.controls.enableRotate = false;
    this.controls.enableZoom = false;
    this.controls.panSpeed = 0.5;
    this.controls.screenSpacePanning = false;
    this.minPan = new THREE.Vector3(-2, -2, -2);
    this.maxPan = new THREE.Vector3(2, 2, 2);
  }

  setCamAngle() {
    this.camAngle = {};

    this.camAngle.unlocked = () => {
      this.controls.maxDistance = 50;
      this.controls.minDistance = 0;
      this.controls.minAzimuthAngle = Math.PI * 0.5;
      this.controls.maxAzimuthAngle = Math.PI;
      this.controls.minPolarAngle = Math.PI * 0.2;
      this.controls.maxPolarAngle = Math.PI * 0.45;
      this.cam = true;
      this.camInstance = 'unlocked';
    };

    this.camAngle.default = () => {
      this.controls.maxDistance = 16;
      this.controls.minDistance = 7;
      this.controls.minAzimuthAngle = 0;
      this.controls.maxAzimuthAngle = Math.PI * 1.999;
      this.controls.minPolarAngle = Math.PI * 0.2;
      this.controls.maxPolarAngle = Math.PI * 0.55;
      this.cam = false;
      this.camInstance = 'default';
    };

    this.camAngle.desktop = () => {
      this.controls.minDistance = 5;
      this.controls.maxDistance = 7;
      // this.controls.minAzimuthAngle = 0
      // this.controls.maxAzimuthAngle = Math.PI * 1.999
      // this.controls.minPolarAngle = Math.PI * 0.2
      // this.controls.maxPolarAngle = Math.PI * 0.53
      this.camInstance = 'desktop';
    };
  }

  setTransitions() {
    this.transitions = {};

    this.transitions.default = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: 'power1.inOut',
        x: 10,
        y: 10,
        z: -10
      });
      gsap.to(this.controls.target, {
        duration: duration,
        ease: 'power1.inOut',
        x: 0,
        y: 2,
        z: 0
      });

      await this.sleep(1000);

      this.controls.enableZoom = true;
      this.controls.enableRotate = true;
    };

    this.transitions.roomview = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: 'power1.inOut',
        x: -10.2,
        y: 6.3,
        z: 3.8
      });

      await this.sleep(1500);
      this.controls.enableRotate = true;
      this.controls.enableZoom = true;
    };

    this.transitions.desktop = async (duration) => {
      this.controls.enableRotate = false;
      this.controls.enableZoom = false;
      this.controls.enablePan = false;

      gsap.to(this.instance.position, {
        duration: duration,
        ease: 'power1.inOut',
        x: 1.65,
        y: 4,
        z: -3.3
      });
      gsap.to(this.controls.target, {
        duration: duration,
        ease: 'power1.inOut',
        x: 1.65,
        y: 2.75,
        z: 3.8
      });

      await this.sleep(1500);
      this.controls.enableZoom = true;
    };
  }

  setModes() {
    this.modes = {};

    // Default
    this.modes.default = {};
    this.modes.default.instance = this.instance.clone();
    // this.modes.default.instance.rotation.reorder('YXZ')

    // Debug
    // this.modes.debug = {}
    // this.modes.debug.instance = this.instance
    // this.modes.debug.instance.rotation.reorder('YXZ')
    // this.modes.debug.instance.position.set(15, 15, -15)

    // this.modes.debug.orbitControls = new OrbitControls(this.modes.debug.instance, this.targetElement)
    // this.modes.debug.orbitControls.enabled = false
    // this.modes.debug.orbitControls.enabled = this.modes.debug.active
    // this.modes.debug.orbitControls.screenSpacePanning = true
    // this.modes.debug.orbitControls.enableKeys = false
    // this.modes.debug.orbitControls.zoomSpeed = 0.25
    // this.modes.debug.orbitControls.enableDamping = true
    // this.modes.debug.orbitControls.update()
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  resize() {
    this.instance.aspect = this.config.width / this.config.height;
    this.instance.updateProjectionMatrix();

    // this.modes.default.instance.aspect = this.config.width / this.config.height
    // this.modes.default.instance.updateProjectionMatrix()

    // this.modes.debug.instance.aspect = this.config.width / this.config.height
    // this.modes.debug.instance.updateProjectionMatrix()
  }

  update() {
    // Update debug orbit controls
    // this.modes.debug.orbitControls.update()

    // Apply coordinates
    // this.instance.position.copy(this.modes[this.mode].instance.position)
    // this.instance.quaternion.copy(this.modes[this.mode].instance.quaternion)
    // this.instance.updateMatrixWorld() // To be used in projection

    this.controls.update();
    if (this.camInstance == 'unlocked') {
      this.controls.target.clamp(this.minPan, this.maxPan);
    }

    if (this.camInstance == 'desktop') {
      this.controls.target.x = 1.65;
      this.controls.target.y = 2.75;
      this.controls.target.z = 3.8;
    }
  }

  destroy() {
    // this.modes.debug.orbitControls.destroy()
  }
}
