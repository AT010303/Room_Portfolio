import EventEmitter from "./EventEmitter";
import Experience from "../Experience";

export default class Mouse extends EventEmitter {
   
    constructor(){
        super();

        this.x = 0;
        this.y = 0;
        this.inDesktop = flase;

        this.on('mousemove', (_event) => {
            if(_event.clientX && _event.clientY){
                this.x = _event.clientX;
                this.y = _event.clientY;
            }

            this.inDesktop = _event.inDesktop ? true: false;
        });
    }
}