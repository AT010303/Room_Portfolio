/* eslint-disable react-refresh/only-export-components */
import { create } from 'zustand';

export const useCameraStore = create((set) => ({
    // Camer State
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
    laptop: () => {
        set((state) => ({
            cameraState: (state.cameraState = 'laptop')
        }));
    },
    tv: () => {
        set((state) => ({
            cameraState: (state.cameraState = 'tv')
        }));
    },
    smartphone: () => {
        set((state) => ({
            cameraState: (state.cameraState = 'smartphone')
        }));
    },
    displayBoard: () => {
        set((state) => ({
            cameraState: (state.cameraState = 'displayBoard')
        }));
    },

    // camera properties

    maxDistancce: 25,
    minDistance: 2,
    maxAzimuthAngle: Math.PI,
    minAzimuthAngle: Math.PI * 0.5,
    minPolarAngle: Math.PI * 0.1,
    maxPolarAngle: Math.PI * 0.45,
    truckSpeed: 0.5,
    dollyToCursor: true,
    enable: true
}));
