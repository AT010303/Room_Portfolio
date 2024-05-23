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

    var date2 = new Date();
    var hours2 = date2.getHours();
    var minutes2 = date2.getMinutes();
    var seconds2 = date2.getSeconds();
    var milliseconds2 = date2.getMilliseconds();
    var smoothSeconds2 = seconds2 + milliseconds2 / 1000;
    minutes2 = minutes2 + smoothSeconds2 / 60;

    useFrame(() => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milliseconds = date.getMilliseconds();
        var smoothSeconds = seconds + milliseconds / 1000;
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
                rotation={[0, 0, THREE.MathUtils.degToRad(6 * minutes2)]}
                ref={minute}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockSecond.geometry}
                position={nodes.clockSecond.position}
                rotation={[0, 0, THREE.MathUtils.degToRad(6 * smoothSeconds2)]}
                ref={second}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
            <mesh
                geometry={nodes.clockHour.geometry}
                position={nodes.clockHour.position}
                rotation={[
                    0,
                    0,
                    THREE.MathUtils.degToRad(0.5 * (60 * hours2 + minutes2))
                ]}
                ref={hour}
            >
                <meshBasicMaterial color={'#000000'} />
            </mesh>
        </>
    );
}
