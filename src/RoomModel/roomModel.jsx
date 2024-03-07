import { useGLTF, useTexture } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';

import TextureMaterial from './textures/TextureMaterial';

extend({ TextureMaterial });

export default function RoomModel() {
    const chairTop = useRef();

    useFrame(({ clock }) => {
        chairTop.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3);
    });

    const {
        NightMix,
        boardColor,
        boardStrength,
        pcColor,
        pcColorStrength,
        deskColors,
        deskColorStrngth
    } = useControls({
        NightMix: {
            value: 0,
            min: 0,
            max: 1,
            step: 0.01
        },

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
        NightMix: NightMix,
        lightBoardColor: boardColor,
        lightBoardStrength: boardStrength,
        lightPcColor: pcColor,
        lightPcStrength: pcColorStrength,
        lightDeskColor: deskColors,
        lightDeskStrength: deskColorStrngth
    };

    return (
        <group>
            <mesh
                geometry={nodes.roomFurniture.geometry}
                position={nodes.roomFurniture.position}
                rotation={nodes.roomFurniture.rotation}
            >
                <textureMaterial {...TextureMaterial} />
            </mesh>

            <mesh
                geometry={nodes.deskShelfStuf.geometry}
                position={nodes.deskShelfStuf.position}
                rotation={nodes.deskShelfStuf.rotation}
            >
                <textureMaterial {...TextureMaterial} />
            </mesh>

            <mesh
                geometry={nodes.chairTvclockstuf.geometry}
                position={nodes.chairTvclockstuf.position}
                rotation={nodes.chairTvclockstuf.rotation}
            >
                <textureMaterial {...TextureMaterial} />
            </mesh>

            <mesh
                geometry={nodes.plant.geometry}
                position={nodes.plant.position}
                rotation={nodes.plant.rotation}
            >
                <textureMaterial {...TextureMaterial} />
            </mesh>

            <mesh
                ref={chairTop}
                geometry={chair.nodes.chairTop.geometry}
                position={chair.nodes.chairTop.position}
                rotation={chair.nodes.chairTop.rotation}
            >
                <textureMaterial {...TextureMaterial} />
            </mesh>

            <mesh
                geometry={nodes.frame1.geometry}
                position={nodes.frame1.position}
                rotation={nodes.frame1.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.frame2.geometry}
                position={nodes.frame2.position}
                rotation={nodes.frame2.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.frame3.geometry}
                position={nodes.frame3.position}
                rotation={nodes.frame3.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.monitor.geometry}
                position={nodes.monitor.position}
                rotation={nodes.monitor.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.laptop.geometry}
                position={nodes.laptop.position}
                rotation={nodes.laptop.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.tvdisplay.geometry}
                position={nodes.tvdisplay.position}
                rotation={nodes.tvdisplay.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
            >
                <meshBasicMaterial />
            </mesh>
        </group>
    );
}
