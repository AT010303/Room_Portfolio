import { useSpring } from '@react-spring/core';
// import { a } from "@react-spring/web"
import { Center, useGLTF, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import TheamSwitch from '../Switch/TheamSwitch';
// import Backdrop from './Backdrop';
import DispFrame from './DispFrame';
import TextureMaterial from './textures/TextureMaterial';

extend({ TextureMaterial });

export default function RoomModel() {
    const chairTop = useRef();
    const textureMatFur = useRef();
    const textureMatDes = useRef();
    const textureMatclock = useRef();
    const textureMatplant = useRef();
    const textureMatChaorTop = useRef();

    const [toggle, set] = useState(0);
    // const [nightMix, setNightMix] = useState(toggle);

    // useEffect(() => {
    //     if (toggle == 0) {
    //         if (nightMix < 1) {
    //             const interval = setInterval(() => {
    //                 setNightMix((prevValue) => prevValue + 0.01);
    //             }, 10);
    //             return () => clearInterval(interval);
    //         }
    //     } else {
    //         if (nightMix > 0) {
    //             const interval = setInterval(() => {
    //                 setNightMix((prevValue) => prevValue - 0.01);
    //             }, 10);
    //             return () => clearInterval(interval);
    //         }
    //     }
    // }, [toggle, nightMix]);

    useEffect(() => {
        gsap.to(textureMatclock.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });

        gsap.to(textureMatFur.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });

        gsap.to(textureMatDes.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });

        gsap.to(textureMatplant.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });

        gsap.to(textureMatChaorTop.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
    }, [toggle]);

    const [{ x }] = useSpring(
        {
            x: toggle,
            config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 }
        },
        [toggle]
    );
    console.log(toggle);

    useFrame(({ clock }) => {
        chairTop.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3);
    });

    const {
        boardColor,
        boardStrength,
        pcColor,
        pcColorStrength,
        deskColors,
        deskColorStrngth
    } = useControls({
        boardColor: {
            value: '#ff2d88',
            label: 'Board Color'
        },

        boardStrength: {
            value: 1.35,
            min: 0,
            max: 3,
            step: 0.01
        },

        pcColor: {
            value: '#4b7eff',
            label: 'PC-Color'
        },
        pcColorStrength: {
            value: 1.2,
            min: 0,
            max: 3,
            step: 0.01
        },
        deskColors: {
            value: '#ff7236',
            label: 'Desk Color'
        },
        deskColorStrngth: {
            value: 1.55,
            min: 0,
            max: 3,
            step: 0.01
        }
    });
    useGLTF.preload('./assets/roombasedraco.glb');
    useGLTF.preload('./assets/chairtopDraco.glb');
    useTexture.preload('./assets/bakedTextureDaycmp.jpg');
    useTexture.preload('./assets/bakedTextureNightcmp.jpg');
    useTexture.preload('./assets/roomTextureLightMapcmp.jpg');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');
    const chair = useGLTF('./assets/chairtopDraco.glb');

    const dBaked = useTexture('./assets/bakedTextureDaycmp.jpg');
    dBaked.flipY = false;
    dBaked.magFilter = THREE.NearestFilter;
    dBaked.minFilter = THREE.NearestFilter;

    const nBaked = useTexture('./assets/bakedTextureNightcmp.jpg');
    nBaked.flipY = false;
    nBaked.magFilter = THREE.NearestFilter;
    nBaked.minFilter = THREE.NearestFilter;

    const lightMap = useTexture('./assets/roomTextureLightMapcmp.jpg');
    lightMap.flipY = false;
    lightMap.magFilter = THREE.NearestFilter;
    lightMap.minFilter = THREE.NearestFilter;

    const TextureMaterial = {
        dbakedm: dBaked,
        nbakedm: nBaked,
        lightMapm: lightMap,
        NightMix: 0,
        lightBoardColor: boardColor,
        lightBoardStrength: boardStrength,
        lightPcColor: pcColor,
        lightPcStrength: pcColorStrength,
        lightDeskColor: deskColors,
        lightDeskStrength: deskColorStrngth
    };

    return (
        <group>
            <Center>
                <mesh
                    geometry={nodes.roomFurniture.geometry}
                    position={nodes.roomFurniture.position}
                    rotation={nodes.roomFurniture.rotation}
                >
                    <textureMaterial {...TextureMaterial} ref={textureMatFur} />
                </mesh>

                <mesh
                    geometry={nodes.deskShelfStuf.geometry}
                    position={nodes.deskShelfStuf.position}
                    rotation={nodes.deskShelfStuf.rotation}
                >
                    <textureMaterial {...TextureMaterial} ref={textureMatDes} />
                </mesh>

                <mesh
                    geometry={nodes.chairTvclockstuf.geometry}
                    position={nodes.chairTvclockstuf.position}
                    rotation={nodes.chairTvclockstuf.rotation}
                >
                    <textureMaterial
                        {...TextureMaterial}
                        ref={textureMatclock}
                    />
                </mesh>

                <mesh
                    geometry={nodes.plant.geometry}
                    position={nodes.plant.position}
                    rotation={nodes.plant.rotation}
                >
                    <textureMaterial
                        {...TextureMaterial}
                        ref={textureMatplant}
                    />
                </mesh>

                <mesh
                    ref={chairTop}
                    geometry={chair.nodes.chairTop.geometry}
                    position={chair.nodes.chairTop.position}
                    rotation={chair.nodes.chairTop.rotation}
                >
                    <textureMaterial
                        {...TextureMaterial}
                        ref={textureMatChaorTop}
                    />
                </mesh>
                <DispFrame />
                <TheamSwitch x={x} set={set} />
            </Center>

            {/* <Backdrop /> */}
        </group>
    );
}
