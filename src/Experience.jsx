import { Center } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import { CameraManager } from './CameraManager/CameraManager';
import RoomModel from './RoomModel/roomModel';

export default function Experience() {
    return (
        <>
            <Perf position="top-left" />
            <CameraManager />
            <Center>
                <RoomModel />
            </Center>
        </>
    );
}
