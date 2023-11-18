import * as THREE from 'three'

import Experience from '../Experience'

export default class chairTop{
    constructor(){

        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.chairTop = this.resources.items.chairTopDraco

        this.nBaked = this.resources.items.nightBaked
        this.nBaked.flipY = false
        this.nBaked.encoding = THREE.sRGBEncoding
        this.nBaked.magFilter = THREE.LinearFilter
        this.nBaked.minFilter = THREE.LinearFilter


        this.dBaked = this.resources.items.dayBaked
        this.dBaked.flipY = false
        this.dBaked.encoding = THREE.sRGBEncoding
        this.dBaked.magFilter = THREE.LinearFilter
        this.dBaked.minFilter = THREE.LinearFilter
        
        this.setModel()
    }

    setModel(){
        // this.model = {}
        this.model = this.chairTop.scene
        this.chairTop = this.model.children.find((child)=> child.name === 'chairTop')

        this.nBakedm = new THREE.MeshBasicMaterial({map : this.nBaked})
        this.dBakedm = new THREE.MeshBasicMaterial({map : this.dBaked})
        // this.chairTop.material = this.nBakedm
        this.chairTop.material = this.dBakedm

        this.scene.add(this.model)
    }

    update(){
        this.chairTop.rotation.y = Math.sin(this.time.elapsed * 0.0004)
    }
}
