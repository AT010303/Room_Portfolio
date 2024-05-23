import { useGLTF } from '@react-three/drei';

import { useCameraStore } from '../helper/CameraStore';
import DesktopiFrame from './iframes/desktopiFrame';
import SmartphoneiFrame from './iframes/smartphoneiFrame';
import PhotoFrame from './photoFrame';

export default function DispFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

    const cameraState = useCameraStore((state) => state.cameraState);
    const desktopState = useCameraStore((state) => state.desktop);
    const laptopState = useCameraStore((state) => state.laptop);
    const tvState = useCameraStore((state) => state.tv);
    const smartphoneState = useCameraStore((state) => state.smartphone);

    console.log(nodes);

    return (
        <>
            <SmartphoneiFrame />
            <DesktopiFrame />
            <PhotoFrame />
            <mesh
                geometry={nodes.monitor.geometry}
                position={nodes.monitor.position}
                rotation={nodes.monitor.rotation}
                onClick={cameraState === 'desktop' ? undefined : desktopState}
            >
                <meshBasicMaterial
                    transparent={true}
                    opacity={1}
                    color={'#000000'}
                />
            </mesh>

            <mesh
                geometry={nodes.laptop.geometry}
                position={nodes.laptop.position}
                rotation={nodes.laptop.rotation}
                onClick={cameraState === 'laptop' ? undefined : laptopState}
            >
                <meshBasicMaterial color={'#efefef'} />
            </mesh>

            <mesh
                geometry={nodes.tvdisplay.geometry}
                position={nodes.tvdisplay.position}
                rotation={nodes.tvdisplay.rotation}
                onClick={cameraState === 'tv' ? undefined : tvState}
            >
                <meshBasicMaterial color={'#efefef'} />
            </mesh>

            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
                onClick={
                    cameraState === 'smartphone' ? undefined : smartphoneState
                }
            >
                <meshBasicMaterial color={'#efefef'} />
            </mesh>
        </>
    );
}
