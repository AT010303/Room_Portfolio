import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Clock() {
    useGLTF.preload('./assets/clock.glb');
    const { nodes } = useGLTF('./assets/clock.glb');

    const hour = useRef();
    const minute = useRef();
    const second = useRef();

    useFrame(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliseconds = date.getMilliseconds();
        let smoothSeconds = seconds + milliseconds / 1000;
        minutes = minutes + smoothSeconds / 60;

        second.current.rotation.z = THREE.MathUtils.degToRad(6 * smoothSeconds);
        minute.current.rotation.z = THREE.MathUtils.degToRad(6 * minutes);
        hour.current.rotation.z = THREE.MathUtils.degToRad(
            0.5 * (60 * hours + minutes)
        );
    });

    return (
        <>
            <mesh
                geometry={nodes.clockMinute.geometry}
                position={nodes.clockMinute.position}
                rotation={[0, 0, 0]}
                ref={minute}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockSecond.geometry}
                position={nodes.clockSecond.position}
                rotation={[0, 0, 0]}
                ref={second}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockHour.geometry}
                position={nodes.clockHour.position}
                rotation={[0, 0, 0]}
                ref={hour}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
        </>
    );
}
