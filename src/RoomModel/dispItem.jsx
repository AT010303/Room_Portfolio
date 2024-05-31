/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { useCameraStore } from '../helper/CameraStore';
import TextureMaterial from './textures/TextureMaterial';
extend({ TextureMaterial });

const DispItem = React.memo(({ toggle, nodes }) => {
    const dispItemRefs = useRef({
        dispItem: null,
        desktopdisp: null,
        musicdisp: null,
        homedisp: null,
        smartphonedisp: null,
        tvdisp: null
    });

    useEffect(() => {
        const refs = dispItemRefs.current;
        Object.keys(refs).forEach((key) => {
            gsap.to(refs[key]?.uniforms.NightMix, {
                value: toggle ? 1 : 0,
                duration: 1
            });
        });
    }, [toggle]);

    const dBakeddisp = useTexture('./assets/boardBakedDcmp.webp');
    const nBakeddisp = useTexture('./assets/boardBakedNcmp.webp');
    const lightMapdisp = useTexture('./assets/boardBakedLMAPcmp.webp');

    const textures = [dBakeddisp, nBakeddisp, lightMapdisp];
    textures.forEach((texture) => {
        texture.flipY = false;
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
    });

    const TextureMaterialDisps = {
        dbakedm: dBakeddisp,
        nbakedm: nBakeddisp,
        lightMapm: lightMapdisp,
        NightMix: 0,
        lightBoardColor: '#fff',
        lightBoardStrength: 0,
        lightPcColor: '#fff',
        lightPcStrength: 0,
        lightDeskColor: '#fff',
        lightDeskStrength: 0
    };

    const [hovered, setHover] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    const onPointerOver = () => setHover(true);
    const onPointerOut = () => setHover(false);

    const cameraState = useCameraStore((state) => state.cameraState);
    const states = {
        default: useCameraStore((state) => state.default),
        desktop: useCameraStore((state) => state.desktop),
        laptop: useCameraStore((state) => state.laptop),
        tv: useCameraStore((state) => state.tv),
        smartphone: useCameraStore((state) => state.smartphone)
    };

    const createMesh = (name, state, refName) => (
        <mesh
            geometry={nodes[name].geometry}
            position={nodes[name].position}
            rotation={nodes[name].rotation}
            onClick={
                cameraState === 'displayBoard'
                    ? cameraState === state
                        ? undefined
                        : states[state]
                    : null
            }
            onPointerOver={
                cameraState === 'displayBoard' ? onPointerOver : null
            }
            onPointerOut={cameraState === 'displayBoard' ? onPointerOut : null}
        >
            <textureMaterial
                {...TextureMaterialDisps}
                ref={(el) => (dispItemRefs.current[refName] = el)}
            />
        </mesh>
    );

    return (
        <>
            {createMesh('dispItem', 'displayBoard', 'dispItem')}
            <mesh
                geometry={nodes.rope.geometry}
                position={nodes.rope.position}
                rotation={nodes.rope.rotation}
            >
                <meshBasicMaterial color={'#160000'} />
            </mesh>
            {createMesh('desktop', 'desktop', 'desktopdisp')}
            {createMesh('music', 'laptop', 'musicdisp')}
            {createMesh('home', 'default', 'homedisp')}
            {createMesh('smartphone', 'smartphone', 'smartphonedisp')}
            {createMesh('tv', 'tv', 'tvdisp')}
        </>
    );
});

export default DispItem;

useTexture.preload('./assets/boardBakedDcmp.webp');
useTexture.preload('./assets/boardBakedNcmp.webp');
useTexture.preload('./assets/boardBakedLMAPcmp.webp');
