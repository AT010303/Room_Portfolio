import * as THREE from 'three'

import Experience from './Experience'

export default class chairTop{
    constructor(){

        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.chairTop = this.resources.items.chairTop

        this.nBaked2 = this.resources.items.nightBaked2
        this.nBaked2.flipY = false
        this.nBaked2.encoding = THREE.sRGBEncoding
        this.nBaked2.magFilter = THREE.NearestFilter
        this.nBaked2.minFilter = THREE.NearestFilter


        this.dBaked2 = this.resources.items.dayBaked2
        this.dBaked2.flipY = false
        this.dBaked2.encoding = THREE.sRGBEncoding
        this.dBaked2.magFilter = THREE.NearestFilter
        this.dBaked2.minFilter = THREE.NearestFilter
        
        this.setModel()
        // this.setMaterial()
    }

    setModel(){
        this.model = {}

        this.model.group = this.resources.items.chairTop.scene.children[0]

        this.nBaked3m = new THREE.MeshBasicMaterial({map : this.nBaked2,})
        this.dBaked3m = new THREE.MeshBasicMaterial({map : this.dBaked2,})
        this.model.group.material = this.nBaked3m
        // this.model.group.material = this.dBaked3m

        this.scene.add(this.model.group)

    }

    update(){

        this.model.group.rotation.y = Math.sin(this.time.elapsed * 0.0004)
    }
}
