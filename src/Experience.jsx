import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';

import { CameraManager } from './CameraManager/CameraManager';
import { useCameraStore } from './helper/CameraStore';
import RoomModel from './RoomModel/roomModel';

export default function Experience() {

    const { x, y, z } = useCameraStore();
    
    return (


        <>
            <Canvas
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 200,
                    position: [x, y , z],
                }}
               
            >
                <color args={['#201919']} attach="background" />
                <EffectComposer
                    enabled:true
                    disableNormalPass:true
                ></EffectComposer>
                <Suspense fallback={null}>
                    <Perf position="top-left" />
                    <CameraManager />
                    <RoomModel />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
}
