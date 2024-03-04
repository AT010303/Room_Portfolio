import { Center, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import ChairTopModel from './ChairTopModel';

export default function RoomModel() {
    const { nodes } = useGLTF('./assets/roombasedraco.glb');
    // console.log(nodes);

    const bakedTextureDay = useTexture('./assets/bakedTextureDaycmp.jpg');
    bakedTextureDay.flipY = false;
    bakedTextureDay.magFilter = THREE.NearestFilter;
    bakedTextureDay.minFilter = THREE.NearestFilter;

    return (
        <group>
            <Center>
                <mesh
                    geometry={nodes.roomFurniture.geometry}
                    position={nodes.roomFurniture.position}
                    rotation={nodes.roomFurniture.rotation}
                >
                    <meshBasicMaterial map={bakedTextureDay} />
                </mesh>

                <mesh
                    geometry={nodes.deskShelfStuf.geometry}
                    position={nodes.deskShelfStuf.position}
                    rotation={nodes.deskShelfStuf.rotation}
                >
                    <meshBasicMaterial map={bakedTextureDay} />
                </mesh>

                <mesh
                    geometry={nodes.chairTvclockstuf.geometry}
                    position={nodes.chairTvclockstuf.position}
                    rotation={nodes.chairTvclockstuf.rotation}
                >
                    <meshBasicMaterial map={bakedTextureDay} />
                </mesh>

                <mesh
                    geometry={nodes.plant.geometry}
                    position={nodes.plant.position}
                    rotation={nodes.plant.rotation}
                >
                    <meshBasicMaterial map={bakedTextureDay} />
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
