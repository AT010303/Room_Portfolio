import { Center, shaderMaterial, useGLTF, useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

import ChairTopModel from './ChairTopModel';
import fragmentShader from './shaders/Room/fragment.glsl';
import vertexShader from './shaders/Room/vertex.glsl';

let colors = {};
colors.boardColor = '#ff64a6';
colors.pcColor = '#4b7eff';
colors.deskColor = '#ffa27a';

const TextureMaterial = shaderMaterial(
    {
        nbakedm: new THREE.Texture(),
        dbakedm: new THREE.Texture(),
        lightMapm: new THREE.Texture(),

        NightMix: 0,

        lightBoardColor: new THREE.Color(colors.boardColor),
        lightBoardStrength: 1.35,

        lightPcColor: new THREE.Color(colors.pcColor),
        lightPcStrength: 1.2,

        lightDeskColor: new THREE.Color(colors.deskColor),
        lightDeskStrength: 1.55
    },
    vertexShader,
    fragmentShader
);

extend({ TextureMaterial });

export default function RoomModel() {
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

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

    return (
        <group>
            <Center>
                <mesh
                    geometry={nodes.roomFurniture.geometry}
                    position={nodes.roomFurniture.position}
                    rotation={nodes.roomFurniture.rotation}
                >
                    <textureMaterial
                        dbakedm={dBaked}
                        nbakedm={nBaked}
                        lightMapm={lightMap}
                    />
                </mesh>

                <mesh
                    geometry={nodes.deskShelfStuf.geometry}
                    position={nodes.deskShelfStuf.position}
                    rotation={nodes.deskShelfStuf.rotation}
                >
                    <textureMaterial
                        dbakedm={dBaked}
                        nbakedm={nBaked}
                        lightMapm={lightMap}
                    />
                </mesh>

                <mesh
                    geometry={nodes.chairTvclockstuf.geometry}
                    position={nodes.chairTvclockstuf.position}
                    rotation={nodes.chairTvclockstuf.rotation}
                >
                    <textureMaterial
                        dbakedm={dBaked}
                        nbakedm={nBaked}
                        lightMapm={lightMap}
                    />
                </mesh>

                <mesh
                    geometry={nodes.plant.geometry}
                    position={nodes.plant.position}
                    rotation={nodes.plant.rotation}
                >
                    <textureMaterial
                        dbakedm={dBaked}
                        nbakedm={nBaked}
                        lightMapm={lightMap}
                    />
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

                <ChairTopModel />
            </Center>
        </group>
    );
}
