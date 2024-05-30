import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import { Perf } from 'r3f-perf';
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
                    position: [10, 8, -10],
                    dpr: [1, 2],
                    linear: true
                }}
            >
                <Suspense fallback={null}>
                    {/* <Perf  /> */}
                    <CameraManager />
                    <RoomModel />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
}
