/* eslint-disable react/display-name */
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
    Bloom,
    EffectComposer,
    Outline,
    Selection
} from '@react-three/postprocessing';
// import { Perf } from 'r3f-perf';
import React, { Suspense } from 'react';

import { CameraManager } from './CameraManager/CameraManager';
import RoomModel from './RoomModel/roomModel';

const Experience = React.memo(() => {
    return (
        <>
            <Canvas
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 200,
                    position: [24, 15, -24]
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
            >
                <Suspense fallback={null}>
                    <Selection>
                        <EffectComposer autoClear={false}>
                            <Outline
                                blur
                                visibleEdgeColor="white"
                                edgeStrength={60}
                                width={2000}
                            />
                            <Bloom mipmapBlur intensity={0.9} />
                        </EffectComposer>
                        {/* <Perf position={'top-left'} /> */}
                        <CameraManager />
                        <RoomModel />
                    </Selection>
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
});

export default Experience;
