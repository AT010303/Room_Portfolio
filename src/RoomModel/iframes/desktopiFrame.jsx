import { Html } from '@react-three/drei';
import { useRef } from 'react';

import { useCameraStore } from '../../helper/CameraStore';

export default function DesktopiFrame() {
    const cameraState = useCameraStore((state) => state.cameraState);
    const iframeRef = useRef();
    const toggle = cameraState === 'desktop' ? true : false;
    return (
        <group>
            {toggle && (
                <Html
                    rotation-y={Math.PI}
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={0.52}
                    occlude="blending"
                    position={[2.125, 3.03, 3.69]}
                    zIndexRange={cameraState === 'desktop' ? [100, 0] : [-1, 0]}
                >
                    <iframe
                        width={1511}
                        height={852}
                        title="embed"
                        src="https://at010303-inner.vercel.app/"
                        style={{
                            border: 'none',
                            display:
                                cameraState === 'desktop' ? 'block' : 'none'
                        }}
                        ref={iframeRef}
                    />
                </Html>
            )}
        </group>
    );
}
