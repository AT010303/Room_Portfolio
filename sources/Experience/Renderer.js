import * as THREE from 'three';
import Experience from './Experience.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default class Renderer {
  constructor(_options = {}) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.debug = this.experience.debug;
    this.stats = this.experience.stats;
    this.time = this.experience.time;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.cssScene = this.experience.cssScene;

    this.usePostprocess = true;

    this.setInstance();
    this.setPostProcess();
  }

  setInstance() {
    this.clearColor = '#444';

    // Renderer
    this.instance = new THREE.WebGLRenderer({
      alpha: false,
      antialias: true
    });
    this.instance.domElement.style.position = 'absolute';
    this.instance.domElement.style.top = 0;
    this.instance.domElement.style.left = 0;
    this.instance.domElement.style.width = '100%';
    this.instance.domElement.style.height = '100%';

    this.instance.setClearColor(this.clearColor, 1);
    this.instance.setSize(this.config.width, this.config.height);
    this.instance.setPixelRatio(this.config.pixelRatio);

    // this.instance.physicallyCorrectLights = true
    // this.instance.gammaOutPut = true
    // this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.outputColorSpace = THREE.SRGBColorSpace;
    // this.instance.shadowMap.type = THREE.PCFSoftShadowMap
    // this.instance.shadowMap.enabled = false
    // this.instance.toneMapping = THREE.NoToneMapping
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;
    // this.instance.toneMappingExposure = 2

    this.context = this.instance.getContext();

    //css3dRenderer
    this.cssInstance = new CSS3DRenderer();
    this.cssInstance.setSize(this.config.width, this.config.height);
    this.cssInstance.domElement.style.position = 'absolute';
    this.cssInstance.domElement.style.top = '0px';
    this.cssInstance.domElement.style.left = '0px';
    this.cssInstance.domElement.style.width = '100%';
    this.cssInstance.domElement.style.height = '100%';

    document.querySelector('#css')?.appendChild(this.cssInstance.domElement);

    // Add stats panel
    if (this.stats) {
      this.stats.setRenderPanel(this.context);
    }
  }

  setPostProcess() {
    this.postProcess = {};

    /**
     * Render pass
     */
    this.postProcess.renderPass = new RenderPass(
      this.scene,
      this.camera.instance
    );

    /**
     * Effect composer
     */
    // const RenderTargetClass = this.config.pixelRatio >= 2 ? THREE.WebGLRenderTarget : THREE.WebGLMultisampleRenderTarget

    this.renderTarget = new THREE.WebGLRenderTarget(
      this.config.width,
      this.config.height,
      {
        generateMipmaps: false,
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        colorSpace: THREE.SRGBColorSpace,
        samples: 2
      }
    );
    this.postProcess.composer = new EffectComposer(
      this.instance,
      this.renderTarget
    );
    this.postProcess.composer.setSize(this.config.width, this.config.height);
    this.postProcess.composer.setPixelRatio(this.config.pixelRatio);

    this.postProcess.composer.addPass(this.postProcess.renderPass);
  }

  resize() {
    // Instance
    this.instance.setSize(this.config.width, this.config.height);
    this.instance.setPixelRatio(this.config.pixelRatio);

    //css renderer
    this.cssInstance.setSize(this.config.width, this.config.height);

    // Post process
    this.postProcess.composer.setSize(this.config.width, this.config.height);
    this.postProcess.composer.setPixelRatio(this.config.pixelRatio);
  }

  update() {
    if (this.stats) {
      this.stats.beforeRender();
    }

    if (this.usePostprocess) {
      this.postProcess.composer.render();
    } else {
      this.instance.render(this.scene, this.camera.instance);
    }

    if (this.stats) {
      this.stats.afterRender();
    }

    this.cssInstance.render(this.cssScene, this.camera.instance);
  }

  destroy() {
    this.instance.renderLists.dispose();
    this.instance.dispose();
    this.renderTarget.dispose();
    this.postProcess.composer.renderTarget1.dispose();
    this.postProcess.composer.renderTarget2.dispose();
  }
}
