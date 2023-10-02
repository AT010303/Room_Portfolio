import * as THREE from 'three'
import { gsap } from 'gsap'

import Experience from './Experience'

import EventEmitter from './Utils/EventEmitter'


export default class PreLoader extends EventEmitter{
    constructor(){
        super()

        // this.loadingManager = new THREE.LoadingManager(

        //     ()=>{
        //         console.log('loaded');
        //     },
        //     ()=>{
        //         console.log('progress');
        //     }

        // )

        this.Experience = new Experience()
        this.scene = this.Experience.scene
        this.resources = this.Experience.resources
        this.sizes = this.Experience.sizes

        this.loadingBarElement = document.querySelector('.loading-bar')
        // console.log(this.loadingBarElement);
        


        this.overlayGeometry = new THREE.PlaneGeometry(2,2,1,1)
        this.overlayMaterial = new THREE.ShaderMaterial({
            transparent : true,

            uniforms:{
                uAlpha : {value : 1}
            },

            vertexShader:`
            void main(){
                gl_Position = vec4(position,1.0);
            }
            `,
            fragmentShader:`

            uniform float uAlpha;
            void main(){
                gl_FragColor = vec4(0,0.0,0.0,uAlpha);
            }
            `
        })
        this.overlay= new THREE.Mesh(this.overlayGeometry , this.overlayMaterial)

        // console.log(this.resources.groups);
        // console.log(this.resources.loader.toLoad);

        

        this.resources.on('end', ()=>{
            gsap.delayedCall(1, ()=>{
                gsap.to(this.overlayMaterial.uniforms.uAlpha, {
                    duration : 3,
                    value : 0,
                    delay: 1.5
                })
    
                this.loadingBarElement.classList.add('ended')
                this.loadingBarElement.style.transform = ''
            })
        })
        

        

        // this.resources.on('end', ()=>{
        //     window.setTimeout(()=>{
        //         gsap.to(this.overlayMaterial.uniforms.uAlpha, {
        //             duration : 3,
        //             value : 0,
        //             delay: 1
        //         })
    
        //         this.loadingBarElement.classList.add('ended')
        //         this.loadingBarElement.style.transform = ''
        //     }, 500)
        // })

        

        this.resources.on('progress', ()=>{
            // console.log(this.resources.loader.loaded, this.resources.loader.toLoad);
            this.progressRatio =  this.resources.loader.loaded/ this.resources.loader.toLoad
            // console.log(this.progressRatio);
            this.loadingBarElement.style.transform = `scaleX(${this.progressRatio})`
        })

        
        

        this.scene.add(this.overlay)
    }
}