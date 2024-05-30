/* eslint-disable react/display-name */
import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
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
                    position: [10, 8, -10],
                    dpr: [1, 2],
                    linear: true
                }}
            >
                <Suspense fallback={null}>
                    {/* <Perf position={'top-left'} /> */}
                    <CameraManager />
                    <RoomModel />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
});

export default Experience;
