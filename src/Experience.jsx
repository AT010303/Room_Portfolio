import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';

import { CameraManager } from './CameraManager/CameraManager';
import RoomModel from './RoomModel/roomModel';

export default function Experience() {
    
    return (
        <>
            <Canvas
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 200,
                    position: [10, 8 , -10],
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
