import * as THREE from 'three'
import Experience from './Experience.js'
import roomModel from './roomModel.js'

export default class World
{
    constructor(_options)
    {
        this.experience = new Experience()
        this.config = this.experience.config
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        this.resources.on('groupEnd', (_group) =>
        {
            if(_group.name === 'base')
            {
                this.setRoom()
            }
        })
    }

    setRoom()
    {
        // this.resources.items.lennaTexture.encoding = THREE.sRGBEncoding
        
        // const cube = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     new THREE.MeshBasicMaterial({ map: this.resources.items.lennaTexture })
        // )
        // this.scene.add(cube)
        
        this.setroomModel();
    }

    setroomModel(){
        this.roomModel = new roomModel()
    }

    resize()
    {
    }

    update()
    {
    }

    destroy()
    {
    }
}