import { CameraControls } from '@react-three/drei';
import { useRef } from 'react';
import { useEffect } from 'react';

import { useCameraStore } from '../helper/CameraStore';

export const CameraManager = () => {
    const cameraControle = useRef();

    const cameraState = useCameraStore((state) => state.cameraState);

    const maxDistancce = useCameraStore((state) => state.maxDistancce);
    const minDistance = useCameraStore((state) => state.minDistance);
    const maxAzimuthAngle = useCameraStore((state) => state.maxAzimuthAngle);
    const minAzimuthAngle = useCameraStore((state) => state.minAzimuthAngle);
    const minPolarAngle = useCameraStore((state) => state.minPolarAngle);
    const maxPolarAngle = useCameraStore((state) => state.maxPolarAngle);
    const truckSpeed = useCameraStore((state) => state.truckSpeed);
    const dollyToCursor = useCameraStore((state) => state.dollyToCursor);
    const enable = useCameraStore((state) => state.enable);

    useEffect(() => {
        if (cameraState === 'default') {
            useCameraStore.setState({ truckSpeed: 0.5 });
            useCameraStore.setState({ dollyToCursor: true });
            useCameraStore.setState({ minDistance: 2 });
            useCameraStore.setState({ maxDistancce: 25 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.1 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.45 });
            useCameraStore.setState({ minAzimuthAngle: Math.PI * 0.5 });
            useCameraStore.setState({ maxAzimuthAngle: Math.PI });
            cameraControle.current.setLookAt(14, 10, -14, 0, -1, 0, true);
        }

        if (cameraState === 'desktop') {
            useCameraStore.setState({ truckSpeed: 0 });
            useCameraStore.setState({ dollyToCursor: false });
            useCameraStore.setState({ minDistance: 5.65 });
            useCameraStore.setState({ maxDistancce: 7.1 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.5 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.5 });
            useCameraStore.setState({ minAzimuthAngle: Math.PI });
            useCameraStore.setState({ maxAzimuthAngle: Math.PI });
            cameraControle.current.setLookAt(2.1, 0.3, 2, 2.1, 0.3, 8, true);
        }

        if (cameraState === 'laptop') {
            useCameraStore.setState({ truckSpeed: 0 });
            useCameraStore.setState({ dollyToCursor: false });
            useCameraStore.setState({ minDistance: 4.2 });
            useCameraStore.setState({ maxDistancce: 6 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.435 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.435 });
            useCameraStore.setState({ minAzimuthAngle: Math.PI * 0.689 });
            useCameraStore.setState({ maxAzimuthAngle: Math.PI * 0.689 });
            cameraControle.current.setLookAt(2, 0, 2.5, -2, -1, 5.2, true);
        }

        if (cameraState === 'tv') {
            useCameraStore.setState({ truckSpeed: 0 });
            useCameraStore.setState({ dollyToCursor: false });
            useCameraStore.setState({ minDistance: 5.6 });
            useCameraStore.setState({ maxDistancce: 6.5 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.5 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.5 });
            useCameraStore.setState({ minAzimuthAngle: 0 });
            useCameraStore.setState({ maxAzimuthAngle: 0 });
            cameraControle.current.setLookAt(2.5, -0.1, 1, 2.5, -0.1, -5, true);
        }

        if (cameraState === 'smartphone') {
            useCameraStore.setState({ truckSpeed: 0 });
            useCameraStore.setState({ dollyToCursor: false });
            useCameraStore.setState({ minDistance: 8.8 });
            useCameraStore.setState({ maxDistancce: 9.2 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.03 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.036 });
            useCameraStore.setState({ minAzimuthAngle: Math.PI * 0.83 });
            useCameraStore.setState({ maxAzimuthAngle: Math.PI * 0.845 });
            cameraControle.current.setLookAt(
                1.7,
                -0.3,
                -0.85,
                1.25,
                -9,
                -0.1,
                true
            );
        }

        if (cameraState === 'displayBoard') {
            useCameraStore.setState({ truckSpeed: 0 });
            useCameraStore.setState({ dollyToCursor: true });
            useCameraStore.setState({ minDistance: 4 });
            useCameraStore.setState({ maxDistancce: 8 });
            useCameraStore.setState({ minPolarAngle: Math.PI * 0.4999 });
            useCameraStore.setState({ maxPolarAngle: Math.PI * 0.5 });
            useCameraStore.setState({ minAzimuthAngle: Math.PI * 0.5 });
            useCameraStore.setState({ maxAzimuthAngle: Math.PI * 0.50001 });
            cameraControle.current.setLookAt(
                -2,
                0.12,
                -1.5,
                -8,
                0.12,
                -1.5,
                true
            );
        }
    });

    return (
        <CameraControls
            makeDefault={true}
            ref={cameraControle}
            dollyToCursor={dollyToCursor}
            dollySpeed={1.2}
            truckSpeed={truckSpeed}
            minDistance={minDistance}
            maxDistance={maxDistancce}
            smoothTime={0.8}
            maxAzimuthAngle={maxAzimuthAngle}
            minAzimuthAngle={minAzimuthAngle}
            minPolarAngle={minPolarAngle}
            maxPolarAngle={maxPolarAngle}
            polarRotateSpeed={0.3}
            azimuthRotateSpeed={0.3}
            maxSpeed={20}
            enableTransition={true}
            boundaryFriction={0}
            boundaryEnclosesCamera={true}
            interactiveArea={[0.5, 0.5, 1, 1]}
            enabled={enable}
        />
    );
};
