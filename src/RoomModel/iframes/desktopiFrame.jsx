/* eslint-disable react/display-name */
import { Html } from '@react-three/drei';
import React, { useMemo, useRef } from 'react';

import { useCameraStore } from '../../helper/CameraStore';

const DesktopiFrame = React.memo(() => {
    const cameraState = useCameraStore((state) => state.cameraState);
    const iframeRef = useRef(null);

    const isDesktop = useMemo(() => cameraState === 'desktop', [cameraState]);

    return (
        <group>
            {isDesktop && (
                <Html
                    rotation-y={Math.PI}
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={0.52}
                    occlude="blending"
                    position={[2.125, 3.03, 3.69]}
                    zIndexRange={[2, 1]}
                >
                    <iframe
                        width={1511}
                        height={852}
                        title="embed"
                        src="https://at010303-inner.vercel.app/"
                        style={{ border: 'none' }}
                        ref={iframeRef}
                    />
                </Html>
            )}
        </group>
    );
});

export default DesktopiFrame;
