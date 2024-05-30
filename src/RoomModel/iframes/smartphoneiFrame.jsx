/* eslint-disable react/display-name */
import { Html } from '@react-three/drei';
import React, { useRef } from 'react';

import { useCameraStore } from '../../helper/CameraStore';

const SmartphoneiFrame = React.memo(() => {
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
                    distanceFactor={0.285}
                    position={[1.6395, 1.125, -1.373]}
                    zIndexRange={
                        cameraState === 'smartphone' ? [10, 1] : [-1, 0]
                    }
                >
                    <iframe
                        width={392}
                        height={809}
                        title="embed"
                        src="https://at010303-inner.vercel.app/"
                        style={{ border: 'none', borderRadius: '22px' }}
                        ref={iframeRef}
                    />
                </Html>
            )}
        </group>
    );
});

export default SmartphoneiFrame;
