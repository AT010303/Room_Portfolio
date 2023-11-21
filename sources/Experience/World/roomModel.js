import * as THREE from 'three'
import Experience from "../Experience";

import vertexShader from './shaders/Room/vertex.glsl'
import fragmentShader from './shaders/Room/fragment.glsl'

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
        
         //Debug
         if(this.debug){
            this.debugFolder
                .addBinding(
                    this.colors,
                    'boardColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.model.material.uniforms.lightBoardColor.value.set(this.colors.boardColor)
                })

                this.debugFolder
                .addBinding(
                    this.model.material.uniforms.lightBoardStrength,
                    'value',
                    {label:'BoardLightStrength', min: 0 , max: 3}
                )


                this.debugFolder
                .addBinding(
                    this.colors,
                    'pcColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.model.material.uniforms.lightPcColor.value.set(this.colors.pcColor)
                })

                this.debugFolder
                .addBinding(
                    this.model.material.uniforms.lightPcStrength,
                    'value',
                    {label:'DesktopLightStrength', min: 0 , max: 3}
                )

                
                this.debugFolder
                .addBinding(
                    this.colors,
                    'deskColor',
                    {view: 'color'}
                ).on('change',()=>{
                    this.model.material.uniforms.lightDeskColor.value.set(this.colors.deskColor)
                })

                this.debugFolder
                .addBinding(
                    this.model.material.uniforms.lightDeskStrength,
                    'value',
                    {label:'DeskLightStrength', min: 0 , max: 3}
                )
        }
    }


    setmodel(){

        this.model = {}

        this.model.roomModel = this.resources.items.RoomModelDraco.scene

        this.model.nBaked = this.resources.items.nightBaked
        this.model.nBaked.flipY = false
        this.model.nBaked.colorSpace = THREE.SRGBColorSpace
        this.model.nBaked.magFilter = THREE.LinearFilter
        this.model.nBaked.minFilter = THREE.LinearFilter

        this.model.dBaked = this.resources.items.dayBaked
        this.model.dBaked.flipY = false
        this.model.dBaked.colorSpace = THREE.SRGBColorSpace
        this.model.dBaked.magFilter = THREE.NearestFilter
        this.model.dBaked.minFilter = THREE.NearestFilter

        this.model.lightMap = this.resources.items.lightMap
        this.model.lightMap.flipY = false
        this.model.lightMap.colorSpace = THREE.SRGBColorSpace
        this.model.lightMap.magFilter = THREE.LinearFilter
        this.model.lightMap.minFilter = THREE.LinearFilter

        //room
        this.chairTvclockstuf = this.model.roomModel.children.find((child) => child.name === 'chairTvclockstuf')
        this.deskShelfStuf = this.model.roomModel.children.find((child)=> child.name === 'deskShelfStuf')
        this.frame1 =  this.model.roomModel.children.find((child)=> child.name === 'frame1')
        this.frame2 =  this.model.roomModel.children.find((child)=> child.name === 'frame2')
        this.frame3 =  this.model.roomModel.children.find((child)=> child.name === 'frame3')
        this.laptop =  this.model.roomModel.children.find((child)=> child.name === 'laptop')
        this.monitor =  this.model.roomModel.children.find((child)=> child.name === 'monitor')
        this.roomFurniture =  this.model.roomModel.children.find((child)=> child.name === 'roomFurniture')
        this.smartphone =  this.model.roomModel.children.find((child)=> child.name === 'smartphone')
        this.tvdisplay =  this.model.roomModel.children.find((child)=> child.name === 'tvdisplay')
        this.plant =  this.model.roomModel.children.find((child)=> child.name === 'plant')


        this.colors = {}
        this.colors.boardColor = '#ff0085'
        this.colors.pcColor = '#5e8bff'
        this.colors.deskColor = '#fb853d'


        this.model.material = new THREE.ShaderMaterial({
            uniforms:{
                nbakedm : {value: this.model.nBaked},
                lightMapm : {value: this.model.lightMap},
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
        
        this.roomFurniture.material = this.model.material
        this.deskShelfStuf.material = this.model.material
        this.chairTvclockstuf.material = this.model.material
        this.plant.material = this.model.material

        this.scene.add(this.model.roomModel)
    }

}