import * as THREE from 'three';
import Experience from './Experience.js';
import normalizeWheel from 'normalize-wheel';
import gsap from 'gsap';

export default class Navigation {
  constructor() {
    this.experience = new Experience();
    this.targetElement = this.experience.targetElement;
    this.camera = this.experience.camera;
    this.config = this.experience.config;
    this.time = this.experience.time;
    this.debug = this.experience.debug;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.instance = this.camera.instance;
    this.setView();
  }

  setCameraAngle() {
    this.camAngle = {};

    this.camAngle.unlocked = () => {
      this.view.spherical.value = new THREE.Spherical(
        30,
        Math.PI * 0.35,
        Math.PI * 0.75
      );
      this.view.spherical.smoothed = this.view.spherical.value.clone();
      this.view.spherical.smoothing = 0.005;
      this.view.spherical.limits = {};
      this.view.spherical.limits.radius = { min: 0, max: 50 };
      this.view.spherical.limits.phi = { min: 0.01, max: Math.PI * 0.5 };
      this.view.spherical.limits.theta = {
        min: Math.PI * 0.5,
        max: Math.PI * 1
      };
      this.cam = true;
    };

    this.camAngle.default = () => {
      this.view.spherical.value = new THREE.Spherical(
        30,
        Math.PI * 0.35,
        Math.PI * 0.75
      );
      this.view.spherical.smoothed = this.view.spherical.value.clone();
      this.view.spherical.smoothing = 0.005;
      this.view.spherical.limits = {};
      this.view.spherical.limits.radius = { min: 7, max: 16 };
      this.view.spherical.limits.phi = { min: 0.01, max: Math.PI * 0.5 };
      this.view.spherical.limits.theta = {
        min: Math.PI * 0.5,
        max: Math.PI * 1
      };
      this.cam = false;
    };

    this.camAngle.desktop = () => {
      this.view.spherical.limits.radius = { min: 6, max: 7.5 };
    };
  }

  setTransitions() {
    this.transitions = {};

    this.transitions.default = async (duration) => {
      this.view.spherical.value = new THREE.Spherical(
        30,
        Math.PI * 0.35,
        Math.PI * 0.75
      );
    };
  }

  setView() {
    this.view = {};

    this.view.spherical = {};
    this.view.spherical.value = new THREE.Spherical(
      30,
      Math.PI * 0.35,
      Math.PI * 0.75
    );
    this.view.spherical.smoothed = this.view.spherical.value.clone();
    this.view.spherical.smoothing = 0.005;
    this.view.spherical.limits = {};
    // this.view.spherical.limits.radius = {min : 10 , max : 40}
    this.view.spherical.limits.radius = { min: 10, max: 50 };
    // this.view.spherical.limits.phi = {min : 0.01 , max : Math.PI * 0.45}
    this.view.spherical.limits.phi = { min: 0.01, max: Math.PI * 0.5 };
    this.view.spherical.limits.theta = { min: Math.PI * 0.5, max: Math.PI * 1 };

    this.view.target = {};
    this.view.target.value = new THREE.Vector3(0, 2, 0);
    this.view.target.smoothed = this.view.target.value.clone();
    this.view.target.smoothing = 0.005;
    this.view.target.limits = {};
    this.view.target.limits.x = { min: -3, max: 3 };
    this.view.target.limits.y = { min: 1, max: 5 };
    this.view.target.limits.z = { min: -3, max: 3 };

    this.view.drag = {};
    this.view.drag.delta = {};
    this.view.drag.delta.x = 0;
    this.view.drag.delta.y = 0;
    this.view.drag.previous = {};
    this.view.drag.previous.x = 0;
    this.view.drag.previous.y = 0;
    this.view.drag.sensitivity = 1;
    this.view.drag.alternative = false;

    this.view.zoom = {};
    this.view.zoom.sensitivity = 0.01;
    this.view.zoom.delta = 0;

    /**
     * Methods
     */
    this.view.down = (_x, _y) => {
      this.view.drag.previous.x = _x;
      this.view.drag.previous.y = _y;
    };

    this.view.move = (_x, _y) => {
      this.view.drag.delta.x += _x - this.view.drag.previous.x;
      this.view.drag.delta.y += _y - this.view.drag.previous.y;

      this.view.drag.previous.x = _x;
      this.view.drag.previous.y = _y;
    };

    this.view.up = () => {};

    this.view.zoomIn = (_delta) => {
      this.view.zoom.delta += _delta;
    };

    /**
     * mouse events
     */

    this.view.onMouseDown = (_event) => {
      _event.preventDefault();

      this.view.drag.alternative =
        _event.button === 2 ||
        _event.button === 1 ||
        _event.ctrlKey ||
        _event.shiftKey;
      this.view.down(_event.clientX, _event.clientY);

      window.addEventListener('mouseup', this.view.onMouseUp);
      window.addEventListener('mousemove', this.view.onMouseMove);
    };

    this.view.onMouseMove = (_event) => {
      _event.preventDefault();
      this.view.move(_event.clientX, _event.clientY);
    };

    this.view.onMouseUp = (_event) => {
      _event.preventDefault();
      this.view.up();
      window.removeEventListener('mouseup', this.view.onMouseUp);
      window.removeEventListener('mousemove', this.view.onMouseMove);
    };
    this.targetElement.addEventListener('mousedown', this.view.onMouseDown);

    /**
     * touch events
     */
    this.view.onTouchStart = (_event) => {
      _event.preventDefault();

      this.view.drag.alternative = _event.touches.length > 1;

      this.view.down(_event.touches[0].clientX, _event.touches[0].clientY);

      window.addEventListener('touchend', this.view.onTouchEnd);
      window.addEventListener('touchmove', this.view.onTouchMove);
    };

    this.view.onTouchMove = (_event) => {
      _event.preventDefault();

      this.view.move(_event.touches[0].clientX, _event.touches[0].clientY);
    };

    this.view.onTouchEnd = (_event) => {
      _event.preventDefault();

      this.view.up();

      window.removeEventListener('touchend', this.view.onTouchEnd);
      window.removeEventListener('touchmove', this.view.onTouchMove);
    };
    window.addEventListener('touchstart', this.view.onTouchStart);

    /**
     * context menue
     */

    this.view.onContextMenue = (_event) => {
      _event.preventDefault();
    };
    window.addEventListener('contextmenu', this.view.onContextMenue);

    /**
     * wheel
     */

    this.view.onWheel = (_event) => {
      _event.preventDefault();

      const normalized = normalizeWheel(_event);
      this.view.zoomIn(normalized.pixelY);
    };

    window.addEventListener('mousewheel', this.view.onWheel, {
      passive: false
    });
    window.addEventListener('wheel', this.view.onWheel, { passive: false });
  }

  update() {
    /**
     * view
     */
    // console.log(this.view.drag.delta.y);

    //zoom
    this.view.spherical.value.radius +=
      this.view.zoom.delta * this.view.zoom.sensitivity;
    //limits on zoom
    this.view.spherical.value.radius = Math.min(
      Math.max(
        this.view.spherical.value.radius,
        this.view.spherical.limits.radius.min
      ),
      this.view.spherical.limits.radius.max
    );

    //Drag
    if (this.view.drag.alternative) {
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3(-1, 0, 0);

      up.applyQuaternion(this.camera.modes.default.instance.quaternion);
      right.applyQuaternion(this.camera.modes.default.instance.quaternion);

      up.multiplyScalar(this.view.drag.delta.y * 0.01);
      right.multiplyScalar(this.view.drag.delta.x * 0.01);

      this.view.target.value.add(up);
      this.view.target.value.add(right);

      // add limits
      this.view.target.value.x = Math.min(
        Math.max(this.view.target.value.x, this.view.target.limits.x.min),
        this.view.target.limits.x.max
      );
      this.view.target.value.y = Math.min(
        Math.max(this.view.target.value.y, this.view.target.limits.y.min),
        this.view.target.limits.y.max
      );
      this.view.target.value.z = Math.min(
        Math.max(this.view.target.value.z, this.view.target.limits.z.min),
        this.view.target.limits.z.max
      );
    } else {
      this.view.spherical.value.theta -=
        (this.view.drag.delta.x * this.view.drag.sensitivity) /
        this.config.smallestSide;
      this.view.spherical.value.phi -=
        (this.view.drag.delta.y * this.view.drag.sensitivity) /
        this.config.smallestSide;

      //add limits
      this.view.spherical.value.theta = Math.min(
        Math.max(
          this.view.spherical.value.theta,
          this.view.spherical.limits.theta.min
        ),
        this.view.spherical.limits.theta.max
      );
      this.view.spherical.value.phi = Math.min(
        Math.max(
          this.view.spherical.value.phi,
          this.view.spherical.limits.phi.min
        ),
        this.view.spherical.limits.phi.max
      );
    }

    this.view.drag.delta.x = 0;
    this.view.drag.delta.y = 0;
    this.view.zoom.delta = 0;

    //smoothing
    this.view.spherical.smoothed.radius +=
      (this.view.spherical.value.radius - this.view.spherical.smoothed.radius) *
      this.view.spherical.smoothing *
      this.time.delta;
    this.view.spherical.smoothed.phi +=
      (this.view.spherical.value.phi - this.view.spherical.smoothed.phi) *
      this.view.spherical.smoothing *
      this.time.delta;
    this.view.spherical.smoothed.theta +=
      (this.view.spherical.value.theta - this.view.spherical.smoothed.theta) *
      this.view.spherical.smoothing *
      this.time.delta;

    this.view.target.smoothed.x +=
      (this.view.target.value.x - this.view.target.smoothed.x) *
      this.view.target.smoothing *
      this.time.delta;
    this.view.target.smoothed.y +=
      (this.view.target.value.y - this.view.target.smoothed.y) *
      this.view.target.smoothing *
      this.time.delta;
    this.view.target.smoothed.z +=
      (this.view.target.value.z - this.view.target.smoothed.z) *
      this.view.target.smoothing *
      this.time.delta;

    const viewPosition = new THREE.Vector3();
    viewPosition.setFromSpherical(this.view.spherical.smoothed);
    viewPosition.add(this.view.target.smoothed);

    this.camera.modes.default.instance.position.copy(viewPosition);
    this.camera.modes.default.instance.lookAt(this.view.target.smoothed);
  }
}
