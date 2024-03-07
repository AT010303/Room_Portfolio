import { CameraControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import RoomModel from './RoomModel/roomModel';

export default function Experience() {
    return (
        <>
            <Perf position="top-left" />
            <CameraControls
                dollyToCursor={true}
                dollySpeed={0.2}
                truckSpeed={0}
                minDistance={3}
                maxDistance={25}
                smoothTime={2}
                maxAzimuthAngle={Math.PI}
                minAzimuthAngle={Math.PI * 0.5}
                minPolarAngle={Math.PI * 0.1}
                maxPolarAngle={Math.PI * 0.45}
                makeDefault
                polarRotateSpeed={0.1}
                azimuthRotateSpeed={0.1}
                maxSpeed={20}
            />
            <RoomModel />
        </>
    );
}
