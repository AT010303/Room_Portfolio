import { useGLTF } from '@react-three/drei';

export default function PhotoFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');
    

    return (
        <>
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
        </>
    );
}
