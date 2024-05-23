import { useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

// eslint-disable-next-line react/prop-types
export default function Windows({ toggle }) {
    useGLTF.preload('./assets/windows.glb');
    const { nodes } = useGLTF('./assets/windows.glb');
    console.log(nodes);

    var color = !toggle ? [2, 0.8, 0.5] : [0.6, 0.8, 3];

    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur intensity={0.7} />
            </EffectComposer>
            <mesh
                geometry={nodes.Plane.geometry}
                position={nodes.Plane.position}
                rotation={nodes.Plane.rotation}
            >
                <meshBasicMaterial toneMapped={false} color={color} />
            </mesh>
        </>
    );
}
