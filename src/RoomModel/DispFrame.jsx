import { useGLTF } from '@react-three/drei';

import { useCameraStore } from '../helper/CameraStore';
import PhotoFrame from './photoFrame';


export default function DispFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

    const cameraState = useCameraStore((state) => state.cameraState);

    const defaultState = useCameraStore((state) => state.default);
    const desktopState = useCameraStore((state) => state.desktop);

    console.log(cameraState);
    
    return (
        <>
            <PhotoFrame />
            <mesh
                geometry={nodes.monitor.geometry}
                position={nodes.monitor.position}
                rotation={nodes.monitor.rotation}
                onClick={cameraState === "default" ? desktopState :defaultState}
                
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.laptop.geometry}
                position={nodes.laptop.position}
                rotation={nodes.laptop.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.tvdisplay.geometry}
                position={nodes.tvdisplay.position}
                rotation={nodes.tvdisplay.rotation}
            >
                <meshBasicMaterial />
            </mesh>

            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
            >
                <meshBasicMaterial />
            </mesh>
        </>
    );
}
