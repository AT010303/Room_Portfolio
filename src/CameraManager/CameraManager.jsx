import { CameraControls } from '@react-three/drei';
import { useRef } from 'react';
import { useEffect } from 'react';

import { useCameraStore } from '../helper/CameraStore';

export const CameraManager = () => {
    const cameraControle = useRef();

    const cameraState = useCameraStore((state) => state.cameraState);

    useEffect(() => {
        if (cameraState === 'default') {
            cameraControle.current.setLookAt(10, 8, -10, 0, 0, 0, true);
        }

        if (cameraState === 'desktop') {
            cameraControle.current.setLookAt(2.1, 0.3, 2, 2.1, 0.3, 8, true);
        }

        if (cameraState === 'laptop') {
            cameraControle.current.setLookAt(2, 0, 2.5, -2, -1, 5.2, true);
        }

        if (cameraState === 'tv') {
            cameraControle.current.setLookAt(2.5, -0.1, 1, 2.5, -0.1, -5, true);
        }

        if (cameraState === 'smartphone') {
            cameraControle.current.setLookAt(2, 0, -1.5, 1, -5, 0, true);
        }
    });

    return (
        <CameraControls
            makeDefault={true}
            ref={cameraControle}
            dollyToCursor={true}
            dollySpeed={1.2}
            truckSpeed={0.5}
            minDistance={2}
            maxDistance={25}
            smoothTime={2}
            maxAzimuthAngle={Math.PI}
            minAzimuthAngle={Math.PI * 0.5}
            minPolarAngle={Math.PI * 0.1}
            maxPolarAngle={Math.PI * 0.45}
            polarRotateSpeed={0.3}
            azimuthRotateSpeed={0.3}
            maxSpeed={20}
            enableTransition={true}
        />
    );
};
