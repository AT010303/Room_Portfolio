import { Html } from '@react-three/drei';
import { useRef } from 'react';

import { useCameraStore } from '../../helper/CameraStore';

export default function SmartphoneiFrame() {
    const cameraState = useCameraStore((state) => state.cameraState);
    const iframeRef = useRef();
    const toggle = cameraState === 'smartphone' ? true : false;

    return (
        <group>
            {toggle && (
                <Html
                    occlude="blending"
                    rotation-y={Math.PI}
                    rotation-x={Math.PI / 2}
                    rotation-z={-Math.PI / 6}
                    transform
                    wrapperClass="htmlPhoneScreen"
                    distanceFactor={0.359}
                    position={[1.6395, 1.125, -1.373]}
                    zIndexRange={
                        cameraState === 'smartphone' ? [10, 1] : [-1, 0]
                    }
                >
                    <iframe
                        width={310}
                        height={640}
                        title="embed"
                        src="https://at010303-inner.vercel.app/"
                        style={{ border: 'none', borderRadius: '22px' }}
                        ref={iframeRef}
                    />
                </Html>
            )}
        </group>
    );
}
