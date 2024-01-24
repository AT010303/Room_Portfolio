import * as THREE from 'three';
import Experience from '../Experience.js';
import roomModel from './roomModel.js';
import chairTop from './chairTop.js';

export default class World {
  constructor(_options) {
    this.experience = new Experience();
    this.config = this.experience.config;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('groupEnd', (_group) => {
      if (_group.name === 'base') {
        this.setRoom();
      }
    });
  }

  setRoom() {
    this.setroomModel();
    this.setchairTop();
  }

  setroomModel() {
    this.roomModel = new roomModel();
  }

  setchairTop() {
    this.chairTop = new chairTop();
  }

  resize() {}

  update() {
    if (this.chairTop) this.chairTop.update();
  }

  destroy() {}
}
