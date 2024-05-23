import { Html } from '@react-three/drei';

import { useCameraStore } from '../../helper/CameraStore';

export default function SmartphoneiFrame() {
    const cameraState = useCameraStore((state) => state.cameraState);

    return (
        <Html
            occlude="blending"
            rotation-y={Math.PI}
            rotation-x={Math.PI / 2}
            rotation-z={-Math.PI / 6}
            transform
            wrapperClass="htmlPhoneScreen"
            distanceFactor={0.359}
            position={[1.6395, 1.125, -1.373]}
            zIndexRange={cameraState === 'smartphone' ? [10, 1] : [-1, 0]}
        >
            <iframe
                width={310}
                height={640}
                title="embed"
                src="https://portfolio-inner-theta.vercel.app/"
                style={{ border: 'none', borderRadius: '22px' }}
            />
        </Html>
    );
}
