/* eslint-disable react/display-name */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const Clock = React.memo(() => {
    const { nodes } = useGLTF('./assets/clock.glb');

    const hourRef = useRef();
    const minuteRef = useRef();
    const secondRef = useRef();

    useFrame(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();
        const smoothSeconds = seconds + milliseconds / 1000;
        const smoothMinutes = minutes + smoothSeconds / 60;
        const smoothHours = hours + smoothMinutes / 60;

        if (secondRef.current) {
            secondRef.current.rotation.z = THREE.MathUtils.degToRad(
                6 * smoothSeconds
            );
        }
        if (minuteRef.current) {
            minuteRef.current.rotation.z = THREE.MathUtils.degToRad(
                6 * smoothMinutes
            );
        }
        if (hourRef.current) {
            hourRef.current.rotation.z = THREE.MathUtils.degToRad(
                30 * smoothHours
            );
        }
    });

    return (
        <>
            <mesh
                geometry={nodes.clockMinute.geometry}
                position={nodes.clockMinute.position}
                rotation={[0, 0, 0]}
                ref={minuteRef}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockSecond.geometry}
                position={nodes.clockSecond.position}
                rotation={[0, 0, 0]}
                ref={secondRef}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockHour.geometry}
                position={nodes.clockHour.position}
                rotation={[0, 0, 0]}
                ref={hourRef}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
        </>
    );
});

export default Clock;

useGLTF.preload('./assets/clock.glb');
