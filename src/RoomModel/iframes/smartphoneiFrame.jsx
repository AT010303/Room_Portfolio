/* eslint-disable react/display-name */
import { Html } from '@react-three/drei';
import React, { useMemo, useRef } from 'react';

import { useCameraStore } from '../../helper/CameraStore';

const SmartphoneiFrame = React.memo(() => {
    const cameraState = useCameraStore((state) => state.cameraState);
    const iframeRef = useRef(null);

    const isSmartphone = useMemo(
        () => cameraState === 'smartphone',
        [cameraState]
    );

    return (
        <group>
            {isSmartphone && (
                <Html
                    occlude="blending"
                    rotation-y={Math.PI}
                    rotation-x={Math.PI / 2}
                    rotation-z={-Math.PI / 6}
                    transform
                    wrapperClass="htmlPhoneScreen"
                    distanceFactor={0.285}
                    position={[1.6395, 1.125, -1.373]}
                    zIndexRange={[2, 1]}
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
