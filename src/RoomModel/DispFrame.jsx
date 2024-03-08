import { useGLTF } from '@react-three/drei';

export default function DispFrame() {
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
        </>
    );
}
