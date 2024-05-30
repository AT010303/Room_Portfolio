import { Html } from '@react-three/drei';
import { EmulatorJS } from 'react-emulatorjs';

import { useCameraStore } from '../../helper/CameraStore';

export default function TvEmulator() {
    const rom = './assets/SuperMarioAdvance4.gba';

    const cameraState = useCameraStore((state) => state.cameraState);
    const toggle = cameraState === 'tv' ? true : false;
    return (
        <group>
           {toggle && ( <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={0.925}
                occlude="blending"
                position={[2.28, 2.72, -3.6]}
                zIndexRange={cameraState === 'tv' ? [2, 1] : [-1, 0]}
            >
                <EmulatorJS
                    width={1610}
                    height={852}
                    EJS_core="gba"
                    EJS_gameUrl={rom}
                    EJS_startOnLoaded={true}
                    EJS_Buttons={{ fullscreen: false }}
                />
            </Html>)}
        </group>
    );
}
