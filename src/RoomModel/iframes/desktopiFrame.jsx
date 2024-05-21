import { Html } from '@react-three/drei';

import { useCameraStore } from '../../helper/CameraStore';

export default function DesktopiFrame() {
    const cameraState = useCameraStore((state) => state.cameraState);
    const desktopState = useCameraStore((state) => state.desktop);
    // const laptopState = useCameraStore((state) => state.laptop);
    // const tvState = useCameraStore((state) => state.tv);
    // const smartphoneState = useCameraStore((state) => state.smartphone);
    return (
        <Html
            rotation-y={Math.PI}
            transform
            wrapperClass="htmlScreen"
            distanceFactor={0.52}
            occlude="blending"
            position={[2.125, 3.026, 3.69]}
            onClick={cameraState === 'desktop' ? undefined : desktopState}
        >
            <iframe
                width={1511}
                height={850}
                title="embed"
                src="https://portfolio-inner-theta.vercel.app/"
                frameBorder={0}
            />
        </Html>
    );
}

//{x: 1.45686674118042, y: 2.0877959728240967, z: 2.7166295051574707}
