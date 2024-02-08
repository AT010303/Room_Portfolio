import * as THREE from 'three';
import Experience from '../Experience';
import Time from '../Utils/Time';
import Sizes from '../Utils/Sizes';
import Mouse from '../Utils/Mouse';

export class CameraKeyframeInstance{
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
        position: new THREE.Vector3(1.65, 3, 0),
        focalPoint: new THREE.Vector3(1.65, 2.6, 3.65)
    },
    desk: {
        position: new THREE.Vector3(0, 0, 0),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    loading: {
        position: new THREE.Vector3(50, 40, -15),
        focalPoint: new THREE.Vector3(0, 0, 0)
    },
    orbitControlsStart: {
        position: new THREE.Vector3(10, 10, -10),
        focalPoint: new THREE.Vector3(0, 2, 0)
    }
    
};

export class DesktopKeyframe extends CameraKeyframeInstance{
    constructor(){
        const keyframe = keys.desktop;
        constructor(keyframe);
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.origin = new THREE.Vector3().copy(keyframe.position);
        this.targetPosition = new THREE.Vector3().copy(keyframe.position);
        this.targetFocalPoint = new THREE.Vector3().copy(keyframe.focalPoint);
    }

    update(){
        const aspect = this.sizes.viewport.width / this.sizes.viewport.height;
        const additionalZoom = this.sizes.width < 786 ? 0: 6;
        this.targetPosition.z = this.origin.z + aspect *10 - additionalZoom;
        this.position.copy(this.targetPosition);
    }
}

export class DeskKeyframe extends CameraKeyframeInstance{
    constructor(){
        this.targetFocalPoint.x +=
            (this.mouse.x - this.sizes.width / 2 - this.targetFoc.x) * 0.05;
        this.targetFocalPoint.y +=
            (-(this.mouse.y - this.sizes.height) - this.targetFoc.y) * 0.05;

        this.targetPosition.x +=
            (this.mouse.x - this.sizes.width / 2 - this.targetPos.x) * 0.025;
        this.targetPosition.y +=
            (-(this.mouse.y - this.sizes.height * 2) - this.targetPos.y) *
            0.025;
        const keyframe = keys.desk;
        super(keyframe);
        this.experience = new Experience();  
    }
}

export class LoadingKeyframe extends CameraKeyframeInstance {
    constructor() {
        const keyframe = keys.loading;
        super(keyframe);
    }

    update() {}
}

export class IdleKeyframe extends CameraKeyframeInstance{
    constructor(){
        const keyframe = keys.idle;
        super(keyframe);
        this.origin = new THREE.Vector3().copy(keyframe.position);
        this.time = new Time();
    }
    update() {
        this.position.x =
            Math.sin((this.time.elapsed + 19000) * 0.00008) * this.origin.x;
        this.position.y =
            Math.sin((this.time.elapsed + 1000) * 0.000004) * 4000 +
            this.origin.y -
            3000;
        this.position.z = this.position.z;
    }
}


export class OrbitControlsStart extends CameraKeyframeInstance {
    constructor() {
        const keyframe = keys.orbitControlsStart;
        super(keyframe);
    }

    update() {}
}
