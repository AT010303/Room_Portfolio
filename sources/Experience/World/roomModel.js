import * as THREE from 'three'
import Experience from "../Experience";

export default class roomModel{
    constructor(){
        // console.log("myroom");
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.roomModel = this.resources.items.RoomModelDraco

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

        this.setmodel()
        this.setMaterials()
    }


    setmodel(){
        this.model = this.roomModel.scene

        //room
        this.chairTvclockstuf = this.model.children.find((child) => child.name === 'chairTvclockstuf')
        this.deskShelfStuf = this.model.children.find((child)=> child.name === 'deskShelfStuf')
        this.frame1 =  this.model.children.find((child)=> child.name === 'frame1')
        this.frame2 =  this.model.children.find((child)=> child.name === 'frame2')
        this.frame3 =  this.model.children.find((child)=> child.name === 'frame3')
        this.laptop =  this.model.children.find((child)=> child.name === 'laptop')
        this.monitor =  this.model.children.find((child)=> child.name === 'monitor')
        this.roomFurniture =  this.model.children.find((child)=> child.name === 'roomFurniture')
        this.smartphone =  this.model.children.find((child)=> child.name === 'smartphone')
        this.tvdisplay =  this.model.children.find((child)=> child.name === 'tvdisplay')
        this.plant =  this.model.children.find((child)=> child.name === 'plant')
    }


    setMaterials(){
        this.nbakedm = new THREE.MeshBasicMaterial({map : this.nBaked})
        this.dbakedm = new THREE.MeshBasicMaterial({map : this.dBaked})
        

//applying texyure        
        //night
        // this.roomFurniture.material = this.nbakedm
        // this.deskShelfStuf.material = this.nbakedm
        // this.chairTvclockstuf.material = this.nbakedm
        // this.plant.material = this.nbakedm

        //day
        this.roomFurniture.material = this.dbakedm
        this.deskShelfStuf.material = this.dbakedm
        this.chairTvclockstuf.material = this.dbakedm
        this.plant.material = this.dbakedm

        this.scene.add(this.model)
    }

}