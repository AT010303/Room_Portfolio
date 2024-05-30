/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React from 'react';

const Windows = React.memo(({ toggle, nodes }) => {
    let color = !toggle ? [2, 0.8, 0.5] : [0.6, 0.8, 3];

    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur intensity={0.9} />
            </EffectComposer>
            <mesh
                geometry={nodes.window.geometry}
                position={nodes.window.position}
                rotation={nodes.window.rotation}
            >
                <meshBasicMaterial toneMapped={false} color={color} />
            </mesh>
        </>
    );
});

export default Windows;
