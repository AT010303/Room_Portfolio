import * as THREE from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import Experience from './Experience';
import EventEmitter from './Utils/EventEmitter';

const SCREEN_SIZE = { w: 1950, h: 1100 };
const IFRAME_PADDING = 32;
const IFRAME_SIZE = {
  w: SCREEN_SIZE.w - IFRAME_PADDING,
  h: SCREEN_SIZE.h - IFRAME_PADDING
};

export default class DesktopScreen extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.cssScene = this.experience.cssScene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.screenSize = new THREE.Vector2(SCREEN_SIZE.w, SCREEN_SIZE.h);
    this.camera = this.experience.camera;
    this.position = new THREE.Vector3(2120.73, 3030.19, 3682.01);
    // this.rotation = new THREE.Euler(-3 * THREE.MathUtils.DEG2RAD, 0, 0);
    this.mouseClickInProgress = false;
    this.shouldLeaveDesktop = false;

    this.createIframe();
  }

  createIframe() {
    const container = document.createElement('div');
    container.style.width = this.screenSize.width + 'px';
    container.style.height = this.screenSize.height + 'px';
    // console.log(this.screenSize.width, this.screenSize.height);
    container.style.opacity = '1';
    container.style.background = '#1d2e2f';

    const iframe = document.createElement('iframe');

    iframe.src = 'https://portfolioos-eta.vercel.app/';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('dev')) {
      iframe.src = 'http://localhost:5173/';
    }
    iframe.style.width = this.screenSize.width + 'px';
    iframe.style.height = this.screenSize.height + 'px';
    // iframe.style.padding =  IFRAME_PADDING + 'px';
    iframe.style.border = '0px';
    iframe.style.boxSizing = 'border-box';
    iframe.style.opacity = '1';
    iframe.className = 'jitter';
    iframe.id = 'computer-screen';
    iframe.frameBorder = '0';
    iframe.title = 'HeffernanOS';

    // Add iframe to container
    container.appendChild(iframe);

    // Create CSS plane
    this.createCssPlane(container);
  }

  /**
   * Creates a CSS plane and GL plane to properly occlude the CSS plane
   * @param element the element to create the css plane for
   */
  createCssPlane(element) {
    // Create CSS3D object
    const object = new CSS3DObject(element);

    // copy monitor position and rotation
    object.position.copy(this.position);
    // object.rotation.copy(this.rotation);
    object.rotateY(-Math.PI);

    // Add to CSS scene
    this.cssScene.add(object);

    // Create GL plane
    const material = new THREE.MeshLambertMaterial();
    material.side = THREE.DoubleSide;
    material.opacity = 0;
    material.transparent = true;
    // NoBlending allows the GL plane to occlude the CSS plane
    material.blending = THREE.NoBlending;

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(
      this.screenSize.width,
      this.screenSize.height
    );

    // Create the GL plane mesh
    const mesh = new THREE.Mesh(geometry, material);

    // Copy the position, rotation and scale of the CSS plane to the GL plane
    mesh.position.copy(this.position);
    // mesh.rotation.copy(this.rotation);
    mesh.scale.copy(object.scale);

    // Add to gl scene
    this.scene.add(mesh);
  }
}
