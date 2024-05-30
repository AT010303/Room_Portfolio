/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import TextureMaterial from './textures/TextureMaterial';
extend({ TextureMaterial });

const PhotoFrame = React.memo(({ toggle, nodes }) => {
    const frame = useRef();

    const dayFrame = useTexture('./assets/bakeFrameDaycmp.jpg');
    dayFrame.flipY = false;
    dayFrame.magFilter = THREE.NearestFilter;
    dayFrame.minFilter = THREE.NearestFilter;

    const nightFrame = useTexture('./assets/bakeFrameNightcmp.jpg');
    nightFrame.flipY = false;
    nightFrame.magFilter = THREE.NearestFilter;
    nightFrame.minFilter = THREE.NearestFilter;

    const lightMapFrame = useTexture('./assets/bakeFrameLightMapcmp.jpg');
    lightMapFrame.flipY = false;
    lightMapFrame.magFilter = THREE.NearestFilter;
    lightMapFrame.minFilter = THREE.NearestFilter;

    const FrameMaterial = {
        dbakedm: dayFrame,
        nbakedm: nightFrame,
        lightMapm: lightMapFrame,
        NightMix: 0,
        lightBoardColor: '#fff',
        lightBoardStrength: 0,
        lightPcColor: '#fff',
        lightPcStrength: 0,
        lightDeskColor: '#fff',
        lightDeskStrength: 0
    };

    useEffect(() => {
        gsap.to(frame.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
    }, [toggle]);

    return (
        <>
            <mesh
                geometry={nodes.frame.geometry}
                position={nodes.frame.position}
                rotation={nodes.frame.rotation}
            >
                <textureMaterial {...FrameMaterial} ref={frame} />
            </mesh>
        </>
    );
});

export default PhotoFrame;

useTexture.preload('./assets/bakeFrameDaycmp.jpg');
useTexture.preload('./assets/bakeFrameNightcmp.jpg');
useTexture.preload('./assets/bakeFrameLightMapcmp.jpg');
