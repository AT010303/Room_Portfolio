import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';


export default function ChairTopModel() {
    const chairTop = useRef();

    useFrame(({ clock }) => {
        chairTop.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3);
        // console.log(clock.getElapsedTime() );
    });

    const { nodes } = useGLTF('./assets/chairtopDraco.glb');
    // console.log(nodes);

    const bakedTextureDay = useTexture('./assets/bakedTextureDaycmp.jpg');
    bakedTextureDay.flipY = false;
    bakedTextureDay.magFilter = THREE.NearestFilter;
    bakedTextureDay.minFilter = THREE.NearestFilter;

    return (
        <group>
            <mesh
                ref={chairTop}
                geometry={nodes.chairTop.geometry}
                position={nodes.chairTop.position}
                rotation={nodes.chairTop.rotation}
            >
                <meshBasicMaterial map={bakedTextureDay} />
            </mesh>
        </group>
    );
}