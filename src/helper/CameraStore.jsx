/* eslint-disable react-refresh/only-export-components */
import { create } from 'zustand';


export const useCameraStore = create((set) => ({
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

    enableControl: () => {
        set((state) => ({
            controle: (state.controle = true)
        }));
    },
    disableControl: () => {
        set((state) => ({
            controle: (state.controle = false)
        }));
    },
}));
