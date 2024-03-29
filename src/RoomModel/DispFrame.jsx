import { useGLTF } from '@react-three/drei';

import { useCameraStore } from '../helper/CameraStore';
import PhotoFrame from './photoFrame';

export default function DispFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

    const cameraState = useCameraStore((state) => state.cameraState);
    const desktopState = useCameraStore((state) => state.desktop);
    const laptopState = useCameraStore((state) => state.laptop);
    const tvState = useCameraStore((state) => state.tv);
    const smartphoneState = useCameraStore((state) => state.smartphone);

    console.log(cameraState);

    return (
        <>
            <PhotoFrame />
            <mesh
                geometry={nodes.monitor.geometry}
                position={nodes.monitor.position}
                rotation={nodes.monitor.rotation}
                onClick={cameraState === 'desktop' ? undefined : desktopState}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.laptop.geometry}
                position={nodes.laptop.position}
                rotation={nodes.laptop.rotation}
                onClick={cameraState === 'laptop' ? undefined : laptopState}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.tvdisplay.geometry}
                position={nodes.tvdisplay.position}
                rotation={nodes.tvdisplay.rotation}
                onClick={cameraState === 'tv' ? undefined : tvState}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
                onClick={
                    cameraState === 'smartphone' ? undefined : smartphoneState
                }
            >
                <meshBasicMaterial />
            </mesh>
        </>
    );
}
