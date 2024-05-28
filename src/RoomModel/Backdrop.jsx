import { useGLTF, useTexture } from '@react-three/drei';

export default function Backdrop() {
    const { nodes } = useGLTF('./assets/baclkdrop.glb');

    const dBaked = useTexture('./assets/bakedTextureDaycmp.jpg');
    dBaked.flipY = false;

    return (
        <>
            <mesh
                geometry={nodes.backdrop.geometry}
                position={[
                    0.27389681339263916, 47.20418991088867, 0.3152056336402893
                ]}
                rotation={nodes.backdrop.rotation}
            >
                <meshBasicMaterial color={'#575757'} />
            </mesh>
        </>
    );
}

useGLTF.preload('./assets/baclkdrop.glb');
useTexture.preload('./assets/bakedTextureDaycmp.jpg');
