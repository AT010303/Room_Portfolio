import * as THREE from 'three';
import Experience from '../Experience';
import Time from '../Utils/Time';
import Sizes from '../Utils/Sizes';
import Mouse from '../Utils/Mouse';

export class CameraKeyframe{
    constructor(keyframe){
        this.position = keyframe.position;
        this.focalPoint = keyframe.focalPoint;
    }
    update() {}
}

const keys = {
    idle: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },

    desktop: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    desk: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    loading: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    orbitControlsStart: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    
}


