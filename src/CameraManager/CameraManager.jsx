import { CameraControls } from '@react-three/drei';

export const CameraManager = () => {
    return (
        <CameraControls
            makeDefault
            dollyToCursor={true}
            dollySpeed={1.2}
            truckSpeed={0.5}
            minDistance={3}
            maxDistance={25}
            smoothTime={2}
            maxAzimuthAngle={Math.PI}
            minAzimuthAngle={Math.PI * 0.5}
            minPolarAngle={Math.PI * 0.1}
            maxPolarAngle={Math.PI * 0.45}
            polarRotateSpeed={0.3}
            azimuthRotateSpeed={0.3}
            maxSpeed={20}
        />
    );
};
