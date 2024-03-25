import { CameraControls } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import { useCameraStore } from '../helper/CameraStore';

export const CameraManager = () => {
    const cameraControle = useRef();

    console.log(cameraControle.current);


    
    const { controle } = useCameraStore();

    return (
        <CameraControls
            enabled={controle}
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
            setTarget={[0, 5, 0]}
            ref={cameraControle}
        />
    );
};
