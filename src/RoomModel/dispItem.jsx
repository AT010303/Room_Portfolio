/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { gsap } from 'gsap';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { useCameraStore } from '../helper/CameraStore';
import TextureMaterial from './textures/TextureMaterial';
extend({ TextureMaterial });

const DispItem = React.memo(({ toggle, nodes }) => {
    // Refs for various display items
    const dispItem = useRef();
    const desktopdisp = useRef();
    const musicdisp = useRef();
    const homedisp = useRef();
    const smartphonedisp = useRef();
    const tvdisp = useRef();

    // Update materials based on the toggle state using gsap
    useEffect(() => {
        gsap.to(dispItem.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(desktopdisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(musicdisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(homedisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(smartphonedisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(tvdisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
    }, [toggle]);

    // Load textures
    const dBakeddisp = useTexture('./assets/boardBakedDcmp.webp');
    dBakeddisp.flipY = false;
    dBakeddisp.magFilter = THREE.NearestFilter;
    dBakeddisp.minFilter = THREE.NearestFilter;

    const nBakeddisp = useTexture('./assets/boardBakedNcmp.webp');
    nBakeddisp.flipY = false;
    nBakeddisp.magFilter = THREE.NearestFilter;
    nBakeddisp.minFilter = THREE.NearestFilter;

    const lightMapdisp = useTexture('./assets/boardBakedLMAPcmp.webp');
    nBakeddisp.flipY = false;
    nBakeddisp.magFilter = THREE.NearestFilter;
    nBakeddisp.minFilter = THREE.NearestFilter;

    // Define material properties
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

    // Change cursor style based on hover state
    useEffect(
        () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
        [hovered]
    );

    // Callbacks for hover events
    const onPointerOver = useCallback(() => setHover(true), []);
    const onPointerOut = useCallback(() => setHover(false), []);

    // Retrieve camera states from the store
    const cameraState = useCameraStore((state) => state.cameraState);
    const defaultState = useCameraStore((state) => state.default);
    const desktopState = useCameraStore((state) => state.desktop);
    const laptopState = useCameraStore((state) => state.laptop);
    const tvState = useCameraStore((state) => state.tv);
    const smartphoneState = useCameraStore((state) => state.smartphone);

    return (
        <>
            {/* Main display item */}
            <mesh
                geometry={nodes.dispItem.geometry}
                position={nodes.dispItem.position}
                rotation={nodes.dispItem.rotation}
                onPointerover={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial {...TextureMaterialDisps} ref={dispItem} />
            </mesh>

            {/* Rope mesh */}
            <mesh
                geometry={nodes.rope.geometry}
                position={nodes.rope.position}
                rotation={nodes.rope.rotation}
            >
                <meshBasicMaterial color={'#160000'} />
            </mesh>

            {/* Desktop display */}
            <mesh
                geometry={nodes.desktop.geometry}
                position={nodes.desktop.position}
                rotation={nodes.desktop.rotation}
                onClick={
                    cameraState === 'displayBoard'
                        ? cameraState === 'desktop'
                            ? undefined
                            : desktopState
                        : null
                }
                onPointerOver={
                    cameraState === 'displayBoard' ? onPointerOver : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial {...TextureMaterialDisps} ref={desktopdisp} />
            </mesh>

            {/* Music display */}
            <mesh
                geometry={nodes.music.geometry}
                position={nodes.music.position}
                rotation={nodes.music.rotation}
                onClick={
                    cameraState === 'displayBoard'
                        ? cameraState === 'laptop'
                            ? undefined
                            : laptopState
                        : null
                }
                onPointerOver={
                    cameraState === 'displayBoard' ? onPointerOver : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial {...TextureMaterialDisps} ref={musicdisp} />
            </mesh>

            {/* Home display */}
            <mesh
                geometry={nodes.home.geometry}
                position={nodes.home.position}
                rotation={nodes.home.rotation}
                onClick={
                    cameraState === 'displayBoard'
                        ? cameraState === 'default'
                            ? undefined
                            : defaultState
                        : null
                }
                onPointerOver={
                    cameraState === 'displayBoard' ? onPointerOver : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial {...TextureMaterialDisps} ref={homedisp} />
            </mesh>

            {/* Smartphone display */}
            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
                onClick={
                    cameraState === 'displayBoard'
                        ? cameraState === 'smartphone'
                            ? undefined
                            : smartphoneState
                        : null
                }
                onPointerOver={
                    cameraState === 'displayBoard' ? onPointerOver : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial
                    {...TextureMaterialDisps}
                    ref={smartphonedisp}
                />
            </mesh>

            {/* TV display */}
            <mesh
                geometry={nodes.tv.geometry}
                position={nodes.tv.position}
                rotation={nodes.tv.rotation}
                onClick={
                    cameraState === 'displayBoard'
                        ? cameraState === 'tv'
                            ? undefined
                            : tvState
                        : null
                }
                onPointerOver={
                    cameraState === 'displayBoard' ? onPointerOver : null
                }
                onPointerOut={
                    cameraState === 'displayBoard' ? onPointerOut : null
                }
            >
                <textureMaterial {...TextureMaterialDisps} ref={tvdisp} />
            </mesh>
        </>
    );
});

export default DispItem;

// Preload textures
useTexture.preload('./assets/boardBakedDcmp.webp');
useTexture.preload('./assets/boardBakedNcmp.webp');
useTexture.preload('./assets/boardBakedLMAPcmp.webp');
