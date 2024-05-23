import { Html } from '@react-three/drei';

import { useCameraStore } from '../../helper/CameraStore';

export default function DesktopiFrame() {

    const cameraState = useCameraStore((state) => state.cameraState);
    return (
        <group>
            
                <Html
                    rotation-y={Math.PI}
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={0.52}
                    occlude="blending"
                    position={[2.125, 3.026, 3.69]}
                    zIndexRange={cameraState === 'desktop' ? [100, 0] : [-1, 0]}
                >
                    <iframe
                        width={1511}
                        height={850}
                        title="embed"
                        src="https://portfolio-inner-theta.vercel.app/"
                        frameBorder={0}
                    />
                </Html>
        </group>
    );
}

//{x: 1.45686674118042, y: 2.0877959728240967, z: 2.7166295051574707}
