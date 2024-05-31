/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { gsap } from 'gsap';
import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

import TextureMaterial from './textures/TextureMaterial';
extend({ TextureMaterial });

const PhotoFrame = React.memo(({ toggle, nodes }) => {
    const frame = useRef();

    const dayFrame = useTexture('./assets/bakeFrameDaycmp.webp');
    const nightFrame = useTexture('./assets/bakeFrameNightcmp.webp');
    const lightMapFrame = useTexture('./assets/bakeFrameLightMapcmp.webp');

    const textureProps = useMemo(() => {
        dayFrame.flipY = false;
        dayFrame.magFilter = THREE.NearestFilter;
        dayFrame.minFilter = THREE.NearestFilter;

        nightFrame.flipY = false;
        nightFrame.magFilter = THREE.NearestFilter;
        nightFrame.minFilter = THREE.NearestFilter;

        lightMapFrame.flipY = false;
        lightMapFrame.magFilter = THREE.NearestFilter;
        lightMapFrame.minFilter = THREE.NearestFilter;

        return {
            dbakedm: dayFrame,
            nbakedm: nightFrame,
            lightMapm: lightMapFrame,
            NightMix: 0
        };
    }, [dayFrame, nightFrame, lightMapFrame]);

    useEffect(() => {
        gsap.to(frame.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
    }, [toggle]);

    return (
        <mesh
            geometry={nodes.frame.geometry}
            position={nodes.frame.position}
            rotation={nodes.frame.rotation}
        >
            <textureMaterial {...textureProps} ref={frame} />
        </mesh>
    );
});

export default PhotoFrame;

useTexture.preload('./assets/bakeFrameDaycmp.webp');
useTexture.preload('./assets/bakeFrameNightcmp.webp');
useTexture.preload('./assets/bakeFrameLightMapcmp.webp');
