import Experience from './Experience.js';
import gsap from 'gsap';

export default class Controller{
    constructor(){
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.resources = this.experience.resources
        this.preLoader = this.experience.setPreloader
        this.config = this.experience.config
        
        this.setLogic()
        
        this.setDesktopControls()
        this.setCameraControls()


        
        this.resources.on('groupEnd', async ()=>{
            this.roomModel  = this.experience.world.roomModel
            this.chairTop = this.experience.world.chairTop
        })
    }

    setLogic(){
        this.logic = {}
        this.logic.mode = 'menue'

        this.logic.lockButtons = async (lockDuration) =>{
            this.logic.buttonsLocked = true
            await this.sleep(lockDuration)
            this.logic.buttonsLocked = false
        }
    }

    setDesktopControls(){
        this.desktopControls = {}
        this.desktopControls.desktop = async ()=>{
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menue'){
                this.logic.mode = 'desktop'
                this.camControls.todesktop()
            }
        }
    }

    setCameraControls(){
        this.camControls = {}
        this.camControls.todesktop = async ()=>{
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.desktop(1.5)
            await this.sleep(1500)
            this.camera.camAngle.desktop()
        }
        this.camControls.toDefault = async ()=>{
            this.logic.lockButtons(1500)
            this.camera.camAngle.unlocked()
            this.camera.transitions.default(1.5)
            await this.sleep(1500)
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}