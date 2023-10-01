import * as THREE from 'three'
import Experience from "./Experience";

export default class roomModel{
    constructor(){
        console.log("myroom");
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug

        this.roomModel = this.resources.items.RoomModel
        
        this.nBaked0 = this.resources.items.nightBaked0
        this.nBaked0.flipY = false
        this.nBaked0.encoding = THREE.sRGBEncoding
        this.nBaked0.magFilter = THREE.NearestFilter
        this.nBaked0.minFilter = THREE.NearestFilter


        this.dBaked0 = this.resources.items.dayBaked0
        this.dBaked0.flipY = false
        this.dBaked0.encoding = THREE.sRGBEncoding
        this.dBaked0.magFilter = THREE.NearestFilter
        this.dBaked0.minFilter = THREE.NearestFilter


        this.nBaked1 = this.resources.items.nightBaked1
        this.nBaked1.flipY = false
        this.nBaked1.encoding = THREE.sRGBEncoding
        this.nBaked1.magFilter = THREE.NearestFilter
        this.nBaked1.minFilter = THREE.NearestFilter


        this.dBaked1 = this.resources.items.dayBaked1
        this.dBaked1.flipY = false
        this.dBaked1.encoding = THREE.sRGBEncoding
        this.dBaked1.magFilter = THREE.NearestFilter
        this.dBaked1.minFilter = THREE.NearestFilter


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





        this.npot = this.resources.items.npot
        this.npot.flipY = false
        this.npot.encoding = THREE.sRGBEncoding
        this.npot.magFilter = THREE.NearestFilter
        this.npot.minFilter = THREE.NearestFilter

        this.dpot = this.resources.items.dpot
        this.dpot.flipY = false
        this.dpot.encoding = THREE.sRGBEncoding
        this.dpot.magFilter = THREE.NearestFilter
        this.dpot.minFilter = THREE.NearestFilter

        this.nsoil = this.resources.items.nsoil
        this.nsoil.flipY = false
        this.nsoil.encoding = THREE.sRGBEncoding
        this.nsoil.magFilter = THREE.NearestFilter
        this.nsoil.minFilter = THREE.NearestFilter

        this.dsoil = this.resources.items.dsoil
        this.dsoil.flipY = false
        this.dsoil.encoding = THREE.sRGBEncoding
        this.dsoil.magFilter = THREE.NearestFilter
        this.dsoil.minFilter = THREE.NearestFilter

        this.nstem = this.resources.items.nstem
        this.nstem.flipY = false
        this.nstem.encoding = THREE.sRGBEncoding
        this.nstem.magFilter = THREE.NearestFilter
        this.nstem.minFilter = THREE.NearestFilter

        this.dstem = this.resources.items.dstem
        this.dstem.flipY = false
        this.dstem.encoding = THREE.sRGBEncoding
        this.dstem.magFilter = THREE.NearestFilter
        this.dstem.minFilter = THREE.NearestFilter

        this.nleaf0 = this.resources.items.nleaf0
        this.nleaf0.flipY = false
        this.nleaf0.encoding = THREE.sRGBEncoding
        this.nleaf0.magFilter = THREE.NearestFilter
        this.nleaf0.minFilter = THREE.NearestFilter

        this.nleaf1 = this.resources.items.nleaf1
        this.nleaf1.flipY = false
        this.nleaf1.encoding = THREE.sRGBEncoding
        this.nleaf1.magFilter = THREE.NearestFilter
        this.nleaf1.minFilter = THREE.NearestFilter

        this.nleaf2 = this.resources.items.nleaf2
        this.nleaf2.flipY = false
        this.nleaf2.encoding = THREE.sRGBEncoding
        this.nleaf2.magFilter = THREE.NearestFilter
        this.nleaf2.minFilter = THREE.NearestFilter

        this.nleaf3 = this.resources.items.nleaf3
        this.nleaf3.flipY = false
        this.nleaf3.encoding = THREE.sRGBEncoding
        this.nleaf3.magFilter = THREE.NearestFilter
        this.nleaf3.minFilter = THREE.NearestFilter

        this.nleaf4 = this.resources.items.nleaf4
        this.nleaf4.flipY = false
        this.nleaf4.encoding = THREE.sRGBEncoding
        this.nleaf4.magFilter = THREE.NearestFilter
        this.nleaf4.minFilter = THREE.NearestFilter

        this.nleaf5 = this.resources.items.nleaf5
        this.nleaf5.flipY = false
        this.nleaf5.encoding = THREE.sRGBEncoding
        this.nleaf5.magFilter = THREE.NearestFilter
        this.nleaf5.minFilter = THREE.NearestFilter

        this.nleaf6 = this.resources.items.nleaf6
        this.nleaf6.flipY = false
        this.nleaf6.encoding = THREE.sRGBEncoding
        this.nleaf6.magFilter = THREE.NearestFilter
        this.nleaf6.minFilter = THREE.NearestFilter

        this.nleaf7 = this.resources.items.nleaf7
        this.nleaf7.flipY = false
        this.nleaf7.encoding = THREE.sRGBEncoding
        this.nleaf7.magFilter = THREE.NearestFilter
        this.nleaf7.minFilter = THREE.NearestFilter

        this.nleaf8 = this.resources.items.nleaf8
        this.nleaf8.flipY = false
        this.nleaf8.encoding = THREE.sRGBEncoding
        this.nleaf8.magFilter = THREE.NearestFilter
        this.nleaf8.minFilter = THREE.NearestFilter

        this.nleaf9 = this.resources.items.nleaf9
        this.nleaf9.flipY = false
        this.nleaf9.encoding = THREE.sRGBEncoding
        this.nleaf9.magFilter = THREE.NearestFilter
        this.nleaf9.minFilter = THREE.NearestFilter

        this.nleaf10 = this.resources.items.nleaf10
        this.nleaf10.flipY = false
        this.nleaf10.encoding = THREE.sRGBEncoding
        this.nleaf10.magFilter = THREE.NearestFilter
        this.nleaf10.minFilter = THREE.NearestFilter


        this.dleaf0 = this.resources.items.dleaf0
        this.dleaf0.flipY = false
        this.dleaf0.encoding = THREE.sRGBEncoding
        this.dleaf0.magFilter = THREE.NearestFilter
        this.dleaf0.minFilter = THREE.NearestFilter

        this.dleaf1 = this.resources.items.dleaf1
        this.dleaf1.flipY = false
        this.dleaf1.encoding = THREE.sRGBEncoding
        this.dleaf1.magFilter = THREE.NearestFilter
        this.dleaf1.minFilter = THREE.NearestFilter

        this.dleaf2 = this.resources.items.dleaf2
        this.dleaf2.flipY = false
        this.dleaf2.encoding = THREE.sRGBEncoding
        this.dleaf2.magFilter = THREE.NearestFilter
        this.dleaf2.minFilter = THREE.NearestFilter

        this.dleaf3 = this.resources.items.dleaf3
        this.dleaf3.flipY = false
        this.dleaf3.encoding = THREE.sRGBEncoding
        this.dleaf3.magFilter = THREE.NearestFilter
        this.dleaf3.minFilter = THREE.NearestFilter

        this.dleaf4 = this.resources.items.dleaf4
        this.dleaf4.flipY = false
        this.dleaf4.encoding = THREE.sRGBEncoding
        this.dleaf4.magFilter = THREE.NearestFilter
        this.dleaf4.minFilter = THREE.NearestFilter

        this.dleaf5 = this.resources.items.dleaf5
        this.dleaf5.flipY = false
        this.dleaf5.encoding = THREE.sRGBEncoding
        this.dleaf5.magFilter = THREE.NearestFilter
        this.dleaf5.minFilter = THREE.NearestFilter

        this.dleaf6 = this.resources.items.dleaf6
        this.dleaf6.flipY = false
        this.dleaf6.encoding = THREE.sRGBEncoding
        this.dleaf6.magFilter = THREE.NearestFilter
        this.dleaf6.minFilter = THREE.NearestFilter

        this.dleaf7 = this.resources.items.dleaf7
        this.dleaf7.flipY = false
        this.dleaf7.encoding = THREE.sRGBEncoding
        this.dleaf7.magFilter = THREE.NearestFilter
        this.dleaf7.minFilter = THREE.NearestFilter

        this.dleaf8 = this.resources.items.dleaf8
        this.dleaf8.flipY = false
        this.dleaf8.encoding = THREE.sRGBEncoding
        this.dleaf8.magFilter = THREE.NearestFilter
        this.dleaf8.minFilter = THREE.NearestFilter

        this.dleaf9 = this.resources.items.dleaf9
        this.dleaf9.flipY = false
        this.dleaf9.encoding = THREE.sRGBEncoding
        this.dleaf9.magFilter = THREE.NearestFilter
        this.dleaf9.minFilter = THREE.NearestFilter

        this.dleaf10 = this.resources.items.dleaf10
        this.dleaf10.flipY = false
        this.dleaf10.encoding = THREE.sRGBEncoding
        this.dleaf10.magFilter = THREE.NearestFilter
        this.dleaf10.minFilter = THREE.NearestFilter



        this.setmodel()
        this.setMaterials()
    }


    setmodel(){
        this.model = this.roomModel.scene

        //room
        // this.chairTop= this.model.children.find((child) => child.name=== 'chairTop')
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

        //plant
        this.Dirt =  this.model.children.find((child)=> child.name === 'Dirt')
        this.leaf0 =  this.model.children.find((child)=> child.name === 'leaf0')
        this.leaf1 =  this.model.children.find((child)=> child.name === 'leaf1')
        this.leaf2 =  this.model.children.find((child)=> child.name === 'leaf2')
        this.leaf3 =  this.model.children.find((child)=> child.name === 'leaf3')
        this.leaf4 =  this.model.children.find((child)=> child.name === 'leaf4')
        this.leaf5 =  this.model.children.find((child)=> child.name === 'leaf5')
        this.leaf6 =  this.model.children.find((child)=> child.name === 'leaf6')
        this.leaf7 =  this.model.children.find((child)=> child.name === 'leaf7')
        this.leaf8 =  this.model.children.find((child)=> child.name === 'leaf8')
        this.leaf9 =  this.model.children.find((child)=> child.name === 'leaf9')
        this.leaf10 =  this.model.children.find((child)=> child.name === 'leaf10')
        this.pot =  this.model.children.find((child)=> child.name === 'pot')
        this.stem =  this.model.children.find((child)=> child.name === 'stem')

        
        
    }


    setMaterials(){

        this.nbaked0m = new THREE.MeshBasicMaterial({map : this.nBaked0})
        this.nbaked1m = new THREE.MeshBasicMaterial({map : this.nBaked1})
        this.nbaked2m = new THREE.MeshBasicMaterial({map : this.nBaked2})

        this.dbaked0m = new THREE.MeshBasicMaterial({map : this.dBaked0})
        this.dbaked1m = new THREE.MeshBasicMaterial({map : this.dBaked1})
        this.dbaked2m = new THREE.MeshBasicMaterial({map : this.dBaked2})
        

        this.nleaf0m = new THREE.MeshBasicMaterial({map : this.nleaf0})
        this.nleaf1m = new THREE.MeshBasicMaterial({map : this.nleaf1})
        this.nleaf2m = new THREE.MeshBasicMaterial({map : this.nleaf2})
        this.nleaf3m = new THREE.MeshBasicMaterial({map : this.nleaf3})
        this.nleaf4m = new THREE.MeshBasicMaterial({map : this.nleaf4})
        this.nleaf5m = new THREE.MeshBasicMaterial({map : this.nleaf5})
        this.nleaf6m = new THREE.MeshBasicMaterial({map : this.nleaf6})
        this.nleaf7m = new THREE.MeshBasicMaterial({map : this.nleaf7})
        this.nleaf8m = new THREE.MeshBasicMaterial({map : this.nleaf8})
        this.nleaf9m = new THREE.MeshBasicMaterial({map : this.nleaf9})
        this.nleaf10m = new THREE.MeshBasicMaterial({map : this.nleaf10})
        this.npotm = new THREE.MeshBasicMaterial({map : this.npot})
        this.nstemm = new THREE.MeshBasicMaterial({map : this.nstem})
        this.nsoilm = new THREE.MeshBasicMaterial({map : this.nsoil})


        this.dleaf0m = new THREE.MeshBasicMaterial({map : this.dleaf0})
        this.dleaf1m = new THREE.MeshBasicMaterial({map : this.dleaf1})
        this.dleaf2m = new THREE.MeshBasicMaterial({map : this.dleaf2})
        this.dleaf3m = new THREE.MeshBasicMaterial({map : this.dleaf3})
        this.dleaf4m = new THREE.MeshBasicMaterial({map : this.dleaf4})
        this.dleaf5m = new THREE.MeshBasicMaterial({map : this.dleaf5})
        this.dleaf6m = new THREE.MeshBasicMaterial({map : this.dleaf6})
        this.dleaf7m = new THREE.MeshBasicMaterial({map : this.dleaf7})
        this.dleaf8m = new THREE.MeshBasicMaterial({map : this.dleaf8})
        this.dleaf9m = new THREE.MeshBasicMaterial({map : this.dleaf9})
        this.dleaf10m = new THREE.MeshBasicMaterial({map : this.dleaf10})
        this.dpotm = new THREE.MeshBasicMaterial({map : this.dpot})
        this.dstemm = new THREE.MeshBasicMaterial({map : this.dstem})
        this.dsoilm = new THREE.MeshBasicMaterial({map : this.dsoil})

        //night
        // this.roomFurniture.material = this.nbaked0m
        // this.deskShelfStuf.material = this.nbaked1m
        // this.chairTvclockstuf.material = this.nbaked2m

        //day
        this.roomFurniture.material = this.dbaked0m
        this.deskShelfStuf.material = this.dbaked1m
        this.chairTvclockstuf.material = this.dbaked2m


        // this.chairTop.material = this.nBaked3m

        // this.leaf0.material = this.nleaf0m
        // this.leaf1.material = this.nleaf1m
        // this.leaf2.material = this.nleaf2m
        // this.leaf3.material = this.nleaf3m
        // this.leaf4.material = this.nleaf4m
        // this.leaf5.material = this.nleaf5m
        // this.leaf6.material = this.nleaf6m
        // this.leaf7.material = this.nleaf7m
        // this.leaf8.material = this.nleaf8m
        // this.leaf9.material = this.nleaf9m
        // this.leaf10.material = this.nleaf10m
        // this.Dirt.material = this.nsoilm
        // this.pot.material = this.npotm
        // this.stem.material = this.nstemm

        //day

        this.leaf0.material = this.dleaf0m
        this.leaf1.material = this.dleaf1m
        this.leaf2.material = this.dleaf2m
        this.leaf3.material = this.dleaf3m
        this.leaf4.material = this.dleaf4m
        this.leaf5.material = this.dleaf5m
        this.leaf6.material = this.dleaf6m
        this.leaf7.material = this.dleaf7m
        this.leaf8.material = this.dleaf8m
        this.leaf9.material = this.dleaf9m
        this.leaf10.material = this.dleaf10m
        this.Dirt.material = this.dsoilm
        this.pot.material = this.dpotm
        this.stem.material = this.dstemm
        

        this.scene.add(this.model)
    }

}