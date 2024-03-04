import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';

import RoomModel from './RoomModel/roomModel';
// import * as THREE from 'three';

export default function Experience() {
    //  roomFurnituretexture.toneMaping = THREE.NoToneMapping;

    return (
        <>
            <color args={['#201919']} attach="background" />
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <RoomModel />
        </>
    );
}
