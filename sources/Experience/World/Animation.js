import Experience from '../Experience.js';
import gsap from 'gsap';

export default class Animation{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        this.update = function update(){}

        this.resources.on('groupEnd', async ()=>{
            this.roomModel  = this.experience.world.roomModel
            this.chairTop = this.experience.world.chairTop
            
            
        })
    }
}