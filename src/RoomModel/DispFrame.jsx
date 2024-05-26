import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei';
import { useCallback, useEffect, useState } from 'react';

import { useCameraStore } from '../helper/CameraStore';
import DesktopiFrame from './iframes/desktopiFrame';
import SmartphoneiFrame from './iframes/smartphoneiFrame';
import LaptopDisp from './laptopDisp';
import PhotoFrame from './photoFrame';

export default function DispFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

    const cameraState = useCameraStore((state) => state.cameraState);
    const desktopState = useCameraStore((state) => state.desktop);
    const laptopState = useCameraStore((state) => state.laptop);
    const tvState = useCameraStore((state) => state.tv);
    const smartphoneState = useCameraStore((state) => state.smartphone);
    const displayBoardState = useCameraStore((state) => state.displayBoard);
    // const defaultState = useCameraStore((state) => state.default);

    const [hovered, setHover] = useState(false);

    useEffect(
        () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
        [hovered]
    );

    const onPointerOver = useCallback(() => setHover(true), []);
    const onPointerOut = useCallback(() => setHover(false), []);


    useTexture.preload('./assets/smartphoneWallpaper.jpg');
    useTexture.preload('./assets/SpotifyClone.jpg');
    const desktopWallpaper = useVideoTexture('./assets/desktopWallpaper.mp4');
    const smartphoneWallpaper = useTexture('./assets/smartphoneWallpaper.jpg');
    const musicBg = useTexture('./assets/SpotifyClone.jpg');

    return (
        <>
            <LaptopDisp />
            <SmartphoneiFrame />
            <DesktopiFrame />
            <PhotoFrame />
            <mesh
                geometry={nodes.monitor.geometry}
                position={nodes.monitor.position}
                rotation={nodes.monitor.rotation}
                onClick={cameraState === 'desktop' ? undefined : desktopState}
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
            >
                <meshBasicMaterial map={desktopWallpaper} toneMapped={false} />
            </mesh>

            <mesh
                geometry={nodes.laptop.geometry}
                position={nodes.laptop.position}
                rotation={nodes.laptop.rotation}
                onClick={cameraState === 'laptop' ? undefined : laptopState}
                onPointerOver={cameraState === 'default' ? onPointerOver : undefined}
                onPointerOut={cameraState === 'default' ? onPointerOut : undefined}
            >
                <meshBasicMaterial map={musicBg} toneMapped={false} />
            </mesh>

            <mesh
                geometry={nodes.tvdisplay.geometry}
                position={nodes.tvdisplay.position}
                rotation={nodes.tvdisplay.rotation}
                onClick={cameraState === 'tv' ? undefined : tvState}
                onPointerOver={cameraState === 'default' ? onPointerOver : undefined}
                onPointerOut={cameraState === 'default' ? onPointerOut : undefined}
            >
                <meshBasicMaterial color={'#d9d9d9'} />
            </mesh>

            <mesh
                geometry={nodes.smartphone.geometry}
                position={nodes.smartphone.position}
                rotation={nodes.smartphone.rotation}
                onClick={
                    cameraState === 'smartphone' ? undefined : smartphoneState
                }
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
            >
                <meshBasicMaterial
                    color={cameraState === 'smartphone' ? null : '#d9d9d9'}
                    map={cameraState !== 'smartphone' ? smartphoneWallpaper : null}
                />
            </mesh>

            <mesh
                position={[-5.2, 2.95, -1.95]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.8, 1.6, 1]}
                onClick={
                    cameraState === 'displayBoard'
                        ? undefined
                        : displayBoardState
                }
                onPointerOver={cameraState === 'default' ? onPointerOver : undefined}
                onPointerOut={cameraState === 'default' ? onPointerOut : undefined}
            >
                <meshBasicMaterial
                    transparent={true}
                    opacity={0}
                    color={'#d9d9d9'}
                />
                <planeGeometry />
            </mesh>
        </>
    );
}
