import * as THREE from 'three'
import Experience from './Experience.js'

export default class RayCaster{
    constructor(){
        this.experience = new Experience()
        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.camera = this.experience.camera
        this.size = this.experience.sizes
        this.preLoader = this.experience.preloader
        this.controller = this.experience.controller
        this.config = this.experience.config

        this.preLoader.on('start', ()=>{

            this.config.touch = this.experience.config.touch
            this.roomview = this.experience.world.roomModel
            this.chairTop = this.experience.world.chairTop
            this.raycaster = new THREE.Raycaster()
            this.cursorDown = new THREE.Vector2()
            this.cursor = new THREE.Vector2()


            //creating desktop hitbox
            // this.desktopHitbox = new THREE.Group()
            this.thitBoxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true})

            this.desktopHitbox = new THREE.Mesh(
                new THREE.BoxGeometry(1.94, 1.1, 0.0249),
                this.thitBoxMaterial
            )
            this.desktopHitbox.position.set(2.11873, 3.01519, 3.68201)
            this.desktopHitbox.visible = false

            this.scene.add(this.desktopHitbox)

            this.laptopHitbox = new THREE.Mesh(
                new THREE.BoxGeometry(1.01, 0.582, 0.01),
                this.thitBoxMaterial
            )
            this.laptopHitbox.position.set(0.29281, 2.3835, 3.195)
            this.laptopHitbox.rotateX(0.13)
            this.laptopHitbox.rotateY(-0.988)
            this.laptopHitbox.rotateZ(0.077)
            this.laptopHitbox.visible = false

            this.scene.add(this.laptopHitbox)


            //debug
            if(this.debug){
                this.hitboxVisibility = {visible: false}
                this.debugFolder = this.debug.addFolder({
                    title: 'hitbox',
                    expanded: true
                })

                this.debugFolder.addBinding(
                    this.hitboxVisibility,
                    'visible'
                ).on('change',(ev)=>{
                    this.desktopHitbox.visible = this.hitboxVisibility.visible
                    this.laptopHitbox.visible = this.hitboxVisibility.visible
                })
            }

            //object test

            this.objectToTest = [

                this.roomview.monitor,
                this.roomview.laptop,
            ]

            //touch object
            if(this.config.touch == true){
                this.objectToTest.push(
                    this.desktopHitbox,
                    this.laptopHitbox
                )
            }else{
                this.objectToTest.push(
                    this.roomview.monitor,
                    this.roomview.laptop
                )
            }

            this.touchPoints = []

            window.addEventListener('pointerdown', (event)=>{
                this.touchPoints.push(event.pointerId)

                this.cursorXmin = Math.abs((event.clientX / this.size.width * 2 - 1) * 0.9)
                this.cursorXmax = Math.abs((event.clientX / this.size.width * 2 - 1) * 1.1)

                this.cursorYmin = Math.abs((event.clientY / this.size.height * 2 - 1) * 0.9)
                this.cursorYmax = Math.abs((event.clientY / this.size.height * 2 - 1) * 1.1)
            })


            //click listner

            window.addEventListener('pointerup', (event)=>{

                this.cursor.x = event.clientX / this.size.width * 2 - 1
                this.cursor.y = - (event.clientY / this.size.height) * 2 + 1

                this.absX = Math.abs(this.cursor.x)
                this.absY = Math.abs(this.cursor.y)

                if(this.touchPoints.length === 1 &&
                    this.absX > this.cursorXmin && this.absX < this.cursorXmax &&
                    this.absY > this.cursorYmin && this.absY < this.cursorYmax){

                        this.click(this.cursor)
                        this.touchPoints = []
                    }else{
                        this.touchPoints = []
                    }
            })
        })

    }

    click(cursor){
        this.raycaster.setFromCamera(cursor, this.camera.instance)

        //object click Listner
        this.intersectsObject = this.raycaster.intersectObjects(this.objectToTest)
        if(this.intersectsObject.length){
            this.selectModel = this.intersectsObject[0].object

            switch(this.selectModel){

                //Desktop
                case this.roomview.monitor:
                case this.desktopHitbox:
                    // this.controller.desktopControls.desktop(this.roomview.monitor, 'desktop')
                    console.log('desktop');
                    this.controller.desktopControls.desktop()
                    break;
            }
        }
        
    }

    setRayCaster(){
        this.raycaster = new THREE.Raycaster()
        this.mouse = new THREE.Vector2()
        this.intersects = []

        this.raycaster.setFromCamera(this.mouse, this.camera.instance)

        this.mouse.x = (this.controller.x / this.size.width) * 2 - 1
        this.mouse.y = - (this.controller.y / this.size.height) * 2 + 1

        this.intersects = this.raycaster.intersectObjects(this.scene.children)

        
    }
}