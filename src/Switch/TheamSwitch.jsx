/* eslint-disable react/prop-types */
import { a } from '@react-spring/three';
import { meshBounds } from '@react-three/drei';
import { useCallback, useEffect, useState } from 'react';

export default function TheamSwitch({ x, set, nodes }) {
    const [hovered, setHover] = useState(false);

    useEffect(
        () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
        [hovered]
    );

    const onClick = useCallback(() => set((toggle) => Number(!toggle)), [set]);
    const onPointerOver = useCallback(() => setHover(true), []);
    const onPointerOut = useCallback(() => setHover(false), []);

    const pZ = x.to([0, 1], [0.1, 0.6]);
    const rX = x.to([0, 1], [0, Math.PI * 1.3]);

    return (
        <>
            <a.group position-z={pZ}>
                <a.mesh
                    geometry={nodes.Sphere.geometry}
                    position={nodes.Sphere.position}
                    rotation={nodes.Sphere.rotation}
                    raycast={meshBounds}
                    onClick={onClick}
                    rotation-x={rX}
                    onPointerOver={onPointerOver}
                    onPointerOut={onPointerOut}
                    castShadow={true}
                    receiveShadow={true}
                >
                    <meshBasicMaterial color={'#e8f8ff'} />
                </a.mesh>
            </a.group>

            <mesh
                geometry={nodes.switchBound.geometry}
                position={nodes.switchBound.position}
                rotation={nodes.switchBound.rotation}
                castShadow={true}
                receiveShadow={true}
            >
                <meshBasicMaterial color={'#131313'} />
            </mesh>
        </>
    );
}
