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
        
        // this.nBaked0 = this.resources.items.nightBaked0
        // this.nBaked0.flipY = false
        // this.nBaked0.encoding = THREE.sRGBEncoding
        // this.nBaked0.magFilter = THREE.NearestFilter
        // this.nBaked0.minFilter = THREE.NearestFilter


        // this.dBaked0 = this.resources.items.dayBaked0
        // this.dBaked0.flipY = false
        // this.dBaked0.encoding = THREE.sRGBEncoding
        // this.dBaked0.magFilter = THREE.NearestFilter
        // this.dBaked0.minFilter = THREE.NearestFilter


        // this.nBaked1 = this.resources.items.nightBaked1
        // this.nBaked1.flipY = false
        // this.nBaked1.encoding = THREE.sRGBEncoding
        // this.nBaked1.magFilter = THREE.NearestFilter
        // this.nBaked1.minFilter = THREE.NearestFilter


        // this.dBaked1 = this.resources.items.dayBaked1
        // this.dBaked1.flipY = false
        // this.dBaked1.encoding = THREE.sRGBEncoding
        // this.dBaked1.magFilter = THREE.NearestFilter
        // this.dBaked1.minFilter = THREE.NearestFilter


        // this.nBaked2 = this.resources.items.nightBaked2
        // this.nBaked2.flipY = false
        // this.nBaked2.encoding = THREE.sRGBEncoding
        // this.nBaked2.magFilter = THREE.NearestFilter
        // this.nBaked2.minFilter = THREE.NearestFilter

        // this.dBaked2 = this.resources.items.dayBaked2
        // this.dBaked2.flipY = false
        // this.dBaked2.encoding = THREE.sRGBEncoding
        // this.dBaked2.magFilter = THREE.NearestFilter
        // this.dBaked2.minFilter = THREE.NearestFilter


        // this.nBaked3 = this.resources.items.nightBaked3
        // this.nBaked3.flipY = false
        // this.nBaked3.encoding = THREE.sRGBEncoding
        // this.nBaked3.magFilter = THREE.NearestFilter
        // this.nBaked3.minFilter = THREE.NearestFilter

        // this.dBaked3 = this.resources.items.dayBaked3
        // this.dBaked3.flipY = false
        // this.dBaked3.encoding = THREE.sRGBEncoding
        // this.dBaked3.magFilter = THREE.NearestFilter
        // this.dBaked3.minFilter = THREE.NearestFilter


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

        // this.nbaked0m = new THREE.MeshBasicMaterial({map : this.nBaked0})
        // this.nbaked1m = new THREE.MeshBasicMaterial({map : this.nBaked1})
        // this.nbaked2m = new THREE.MeshBasicMaterial({map : this.nBaked2})
        // this.nbaked3m = new THREE.MeshBasicMaterial({map : this.nBaked3})
        this.nbakedm = new THREE.MeshBasicMaterial({map : this.nBaked})
        this.dbakedm = new THREE.MeshBasicMaterial({map : this.dBaked})

        // this.dbaked0m = new THREE.MeshBasicMaterial({map : this.dBaked0})
        // this.dbaked1m = new THREE.MeshBasicMaterial({map : this.dBaked1})
        // this.dbaked2m = new THREE.MeshBasicMaterial({map : this.dBaked2})
        // this.dbaked3m = new THREE.MeshBasicMaterial({map : this.dBaked3})
        

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
        // this.roomFurniture.material = this.dbaked0m
        // this.deskShelfStuf.material = this.dbaked1m
        // this.chairTvclockstuf.material = this.dbaked2m
        // this.plant.material = this.dbaked3m


        this.scene.add(this.model)
    }

}