import { useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

// eslint-disable-next-line react/prop-types
export default function Windows({ toggle }) {
    useGLTF.preload('./assets/windows.glb');
    const { nodes } = useGLTF('./assets/windows.glb');
    console.log(nodes);

    var color = !toggle ? [2.5, 1, 0.5] : [0.8, 0.8, 3];

    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur />
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
