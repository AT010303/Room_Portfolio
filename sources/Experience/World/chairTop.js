import * as THREE from 'three'

import Experience from '../Experience'

// import vertexShader from './shaders/room/vertex.glsl'
// import fragmentShader from './shaders/room/fragment.glsl'

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
        this.nBaked.colorSpace = THREE.SRGBColorSpace
        this.nBaked.magFilter = THREE.LinearFilter
        this.nBaked.minFilter = THREE.LinearFilter


        this.dBaked = this.resources.items.dayBaked
        this.dBaked.flipY = false
        this.dBaked.colorSpace = THREE.SRGBColorSpace
        // this.dBaked.encoding = THREE.sRGBEncoding
        this.dBaked.magFilter = THREE.LinearFilter
        this.dBaked.minFilter = THREE.LinearFilter

        this.lightMap = this.resources.items.lightMap
        this.lightMap.flipY = false
        // this.lightMap.encoding = THREE.sRGBEncoding
        this.lightMap.magFilter = THREE.LinearFilter
        this.lightMap.minFilter = THREE.LinearFilter
        
        this.setModel()
    }

    setModel(){
        // this.model = {}
        this.model = this.chairTop.scene
        this.chairTop = this.model.children.find((child)=> child.name === 'chairTop')


        // this.material = new THREE.ShaderMaterial({
        //     uniforms:{
        //         nbakedm : {value: this.nBaked},
        //         lightMapm : {value: this.lightMap},
        //         // dbakedm : {value: this.dBaked}
        //     },
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader
        // })

        this.nBakedm = new THREE.MeshBasicMaterial({map : this.nBaked})
        // this.dBakedm = new THREE.MeshBasicMaterial({map : this.dBaked})
        // this.lightMapm = new THREE.MeshBasicMaterial({map : this.lightMap})
        this.chairTop.material = this.nBakedm
        // this.chairTop.material = this.dBakedm
        // this.chairTop.material = this.lightMapm
        // this.chairTop.material = this.material

        this.scene.add(this.model)
    }

    update(){
        this.chairTop.rotation.y = Math.sin(this.time.elapsed * 0.0004)
    }
}
