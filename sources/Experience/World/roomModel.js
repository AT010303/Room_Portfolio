import * as THREE from 'three'
import Experience from "../Experience";

import vertexShader from './shaders/room/vertex.glsl'
import fragmentShader from './shaders/room/fragment.glsl'

export default class roomModel{
    constructor(){
        // console.log("myroom");
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        

        if(this.debug){
            this.debugFolder = this.debug.addFolder({
                title: 'roomModel',
                expanded: true
            })
        }

        

        this.setmodel()
        this.setMaterials()


         //Debug

         if(this.debug){


            this.debugFolder
                .addBinding(
                    this.colors,
                    'boardColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.material.uniforms.lightBoardColor.value.set(this.colors.boardColor)
                })

                this.debugFolder
                .addBinding(
                    this.material.uniforms.lightBoardStrength,
                    'value',
                    {label:'BoardLightStrength', min: 0 , max: 3}
                )


                this.debugFolder
                .addBinding(
                    this.colors,
                    'pcColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.material.uniforms.lightPcColor.value.set(this.colors.pcColor)
                })

                this.debugFolder
                .addBinding(
                    this.material.uniforms.lightPcStrength,
                    'value',
                    {label:'DesktopLightStrength', min: 0 , max: 3}
                )


                this.debugFolder
                .addBinding(
                    this.colors,
                    'deskColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.material.uniforms.lightDeskColor.value.set(this.colors.deskColor)
                })

                this.debugFolder
                .addBinding(
                    this.material.uniforms.lightDeskStrength,
                    'value',
                    {label:'DeskLightStrength', min: 0 , max: 3}
                )
        }
    }


    setmodel(){

        this.roomModel = this.resources.items.RoomModelDraco

        this.nBaked = this.resources.items.nightBaked
        this.nBaked.flipY = false
        this.nBaked.colorSpace = THREE.SRGBColorSpace
        this.nBaked.magFilter = THREE.LinearFilter
        this.nBaked.minFilter = THREE.LinearFilter

        this.dBaked = this.resources.items.dayBaked
        this.dBaked.flipY = false
        this.dBaked.colorSpace = THREE.SRGBColorSpace
        // this.dBaked.encoding = THREE.SRGBColorSpace
        this.dBaked.magFilter = THREE.NearestFilter
        this.dBaked.minFilter = THREE.NearestFilter

        this.lightMap = this.resources.items.lightMap
        this.lightMap.flipY = false
        this.lightMap.colorSpace = THREE.SRGBColorSpace
        this.lightMap.magFilter = THREE.LinearFilter
        this.lightMap.minFilter = THREE.LinearFilter


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
        this.colors = {}

        this.colors.boardColor = '#ff0085'
        this.colors.pcColor = '#5e8bff'
        this.colors.deskColor = '#fb853d'

        // this.nbakedm = new THREE.MeshBasicMaterial({map : this.nBaked})
        // this.dbakedm = new THREE.MeshBasicMaterial({map : this.dBaked})
        // this.lightMapm = new THREE.MeshBasicMaterial({map : this.lightMap})

        this.material = new THREE.ShaderMaterial({
            uniforms:{
                nbakedm : {value: this.nBaked},
                lightMapm : {value: this.lightMap},
                // dbakedm : {value: this.dBaked}


                lightBoardColor: {value: new THREE.Color(this.colors.boardColor)},
                lightBoardStrength: {value: 1.5},

                lightPcColor: {value: new THREE.Color(this.colors.pcColor)},
                lightPcStrength: {value: 1.2},

                lightDeskColor: {value: new THREE.Color(this.colors.deskColor)},
                lightDeskStrength: {value: 1.8}
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
        })
        

//applying texyure        
        //night
        // this.roomFurniture.material = this.nbakedm
        // this.deskShelfStuf.material = this.nbakedm
        // this.chairTvclockstuf.material = this.nbakedm
        // this.plant.material = this.nbakedm

        //day
        // this.roomFurniture.material = this.dbakedm
        // this.deskShelfStuf.material = this.dbakedm
        // this.chairTvclockstuf.material = this.dbakedm
        // this.plant.material = this.dbakedm

        //lightMap
        // this.roomFurniture.material = this.lightMapm
        // this.deskShelfStuf.material = this.lightMapm
        // this.chairTvclockstuf.material = this.lightMapm
        // this.plant.material = this.lightMapm


        this.roomFurniture.material = this.material
        this.deskShelfStuf.material = this.material
        this.chairTvclockstuf.material = this.material
        this.plant.material = this.material

        this.scene.add(this.model)
    }
}