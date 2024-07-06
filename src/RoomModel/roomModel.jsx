/* eslint-disable react/display-name */
import { useSpring } from '@react-spring/core';
import { Center, useGLTF, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useControls } from 'leva';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import { useCameraStore } from '../helper/CameraStore';
import TheamSwitch from '../Switch/TheamSwitch';
import Clock from './clock';
import DispFrame from './DispFrame';
import DispItem from './dispItem';
import PhotoFrame from './photoFrame';
import TextureMaterial from './textures/TextureMaterial';
import Windows from './Windows';

extend({ TextureMaterial });

const RoomModel = React.memo(() => {
    const chairTop = useRef();
    const textureMatFur = useRef();
    const textureMatDes = useRef();
    const textureMatChaorTop = useRef();

    const [toggle, setToggle] = useState(0);

    useEffect(() => {
        const nightMix = toggle ? 1 : 0;
        gsap.to(textureMatFur.current.uniforms.NightMix, {
            value: nightMix,
            duration: 1
        });
        gsap.to(textureMatDes.current.uniforms.NightMix, {
            value: nightMix,
            duration: 1
        });
        gsap.to(textureMatChaorTop.current.uniforms.NightMix, {
            value: nightMix,
            duration: 1
        });
    }, [toggle]);

    const [{ x }] = useSpring(
        {
            x: toggle,
            config: { mass: 4, tension: 800, friction: 35, precision: 0.001 }
        },
        [toggle]
    );

    useFrame(({ clock }) => {
        if (chairTop.current) {
            chairTop.current.rotation.y = Math.sin(
                clock.getElapsedTime() * 0.3
            );
        }
    });

    const controls = useControls({
        boardColor: { value: '#ff2d88', label: 'Board Color' },
        boardStrength: { value: 1.35, min: 0, max: 3, step: 0.01 },
        pcColor: { value: '#4b7eff', label: 'PC-Color' },
        pcColorStrength: { value: 1.2, min: 0, max: 3, step: 0.01 },
        deskColors: { value: '#ff7236', label: 'Desk Color' },
        deskColorStrngth: { value: 1.55, min: 0, max: 3, step: 0.01 }
    });

    const roomModel = useGLTF('./assets/RoomModel.glb');
    const chair = useGLTF('./assets/chairtopDraco.glb');

    const dBaked = useTexture('./assets/bakedTextureDaycmp.webp');
    dBaked.flipY = false;
    dBaked.magFilter = THREE.LinearFilter;
    dBaked.minFilter = THREE.NearestFilter;
    dBaked.generateMipmaps = false;

    const nBaked = useTexture('./assets/roomTextureNightcmp.webp');
    nBaked.flipY = false;
    nBaked.magFilter = THREE.LinearFilter;
    nBaked.minFilter = THREE.NearestFilter;
    nBaked.generateMipmaps = false;

    const lightMap = useTexture('./assets/roomTextureLightMapcmp.webp');
    lightMap.flipY = false;
    lightMap.magFilter = THREE.LinearFilter;
    lightMap.minFilter = THREE.NearestFilter;
    lightMap.generateMipmaps = false;

    const textureMaterialProps = useMemo(
        () => ({
            dbakedm: dBaked,
            nbakedm: nBaked,
            lightMapm: lightMap,
            NightMix: 0,
            lightBoardColor: controls.boardColor,
            lightBoardStrength: controls.boardStrength,
            lightPcColor: controls.pcColor,
            lightPcStrength: controls.pcColorStrength,
            lightDeskColor: controls.deskColors,
            lightDeskStrength: controls.deskColorStrngth
        }),
        [dBaked, nBaked, lightMap, controls]
    );

    const cameraState = useCameraStore((state) => state.cameraState);
    const defaultState = useCameraStore((state) => state.default);

    return (
        <group>
            <Center>
                <mesh
                    geometry={roomModel.nodes.roomFurniture.geometry}
                    position={roomModel.nodes.roomFurniture.position}
                    rotation={roomModel.nodes.roomFurniture.rotation}
                    onClick={
                        cameraState === 'default'
                            ? undefined
                            : cameraState === 'displayBoard'
                              ? undefined
                              : cameraState === 'laptop'
                                ? undefined
                                : defaultState
                    }
                >
                    <textureMaterial
                        {...textureMaterialProps}
                        ref={textureMatFur}
                    />
                </mesh>

                <mesh
                    geometry={roomModel.nodes.deskShelfStuf.geometry}
                    position={roomModel.nodes.deskShelfStuf.position}
                    rotation={roomModel.nodes.deskShelfStuf.rotation}
                    onClick={
                        cameraState === 'default' ? undefined : defaultState
                    }
                >
                    <textureMaterial
                        {...textureMaterialProps}
                        ref={textureMatDes}
                    />
                </mesh>

                <mesh
                    ref={chairTop}
                    geometry={chair.nodes.chairTop.geometry}
                    position={chair.nodes.chairTop.position}
                    rotation={chair.nodes.chairTop.rotation}
                    onClick={
                        cameraState === 'default' ? undefined : defaultState
                    }
                >
                    <textureMaterial
                        {...textureMaterialProps}
                        ref={textureMatChaorTop}
                    />
                </mesh>
                <PhotoFrame toggle={toggle} nodes={roomModel.nodes} />
                <DispFrame nodes={roomModel.nodes} />
                <DispItem toggle={toggle} nodes={roomModel.nodes} />
                <Clock />
                <Windows toggle={toggle} nodes={roomModel.nodes} />
                <TheamSwitch x={x} set={setToggle} nodes={roomModel.nodes} />
            </Center>
        </group>
    );
});

export default RoomModel;

useGLTF.preload('./assets/RoomModel.glb');
useGLTF.preload('./assets/chairtopDraco.glb');
useTexture.preload('./assets/bakedTextureDaycmp.webp');
useTexture.preload('./assets/roomTextureNightcmp.webp');
useTexture.preload('./assets/roomTextureLightMapcmp.webp');
