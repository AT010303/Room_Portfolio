/* eslint-disable react/display-name */
import { Html } from '@react-three/drei';
import React, { useMemo } from 'react';
import { EmulatorJS } from 'react-emulatorjs';

import { useCameraStore } from '../../helper/CameraStore';

const TvEmulator = React.memo(() => {
    const rom = './assets/SuperMarioAdvance4.gba';

    const cameraState = useCameraStore((state) => state.cameraState);
    const isTv = useMemo(() => cameraState === 'tv', [cameraState]);

    return (
        <group>
            {isTv && (
                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={0.925}
                    occlude="blending"
                    position={[2.28, 2.72, -3.6]}
                    zIndexRange={[2, 1]}
                >
                    <EmulatorJS
                        width={1610}
                        height={852}
                        EJS_core="gba"
                        EJS_gameUrl={rom}
                        EJS_startOnLoaded={true}
                        EJS_Buttons={{ fullscreen: false }}
                    />
                </Html>
            )}
        </group>
    );
});

export default TvEmulator;
