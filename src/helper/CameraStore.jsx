/* eslint-disable react-refresh/only-export-components */
import { create } from 'zustand';


export const useCameraStore = create((set) => ({
    x: 10,
    y: 8,
    z: -10,

    setx: (x)=>{
        set((state) => ({
            x: (state.x = x)
        }));
    },
    sety: (y)=>{
        set((state) => ({
            y: (state.y = y)
        }));
    },
    setz: (z)=>{
        set((state) => ({
            z: (state.z = z)
        }));
    },


    cameraState: 'default',
    
    default: () => {

        set((state) => ({
            cameraState: (state.cameraState = 'default')
        }));
    },
    desktop: () => {
        set((state) => ({
            cameraState: (state.cameraState = 'desktop')
        }));
    },

    controle : true,

    // enableControl: () => {
    //     set((state) => ({
    //         controle: (state.controle = true)
    //     }));
    // },
    // disableControl: () => {
    //     set((state) => ({
    //         controle: (state.controle = false)
    //     }));
    // },
}));
