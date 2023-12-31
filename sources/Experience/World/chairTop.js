import Experience from '../Experience'

export default class chairTop{
    constructor(){

        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.world = this.experience.world

        this.setModel()
    }

    setModel(){
        this.model = this.resources.items.chairTopDraco.scene
        this.chairTop = this.model.children.find((child)=> child.name === 'chairTop')
        this.chairTop.material = this.world.roomModel.model.material
        this.scene.add(this.model)
    }

    update(){
        this.chairTop.rotation.y = Math.sin(this.time.elapsed * 0.0004)
    }
}
