/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useTexture } from '@react-three/drei';
import { Howl } from 'howler';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useCameraStore } from '../helper/CameraStore';

const LaptopDisp = React.memo(({ nodes }) => {
    const autumn = useRef();
    const christmas = useRef();
    const clarity = useRef();
    const comeAndGet = useRef();
    const sunflower = useRef();

    const AutumnPause = useTexture('./assets/laptopDisp/AutumnPaus.jpg');
    const AutumnPlay = useTexture('./assets/laptopDisp/AutumnPlay.jpg');

    const christmasPause = useTexture(
        './assets/laptopDisp/christmasLightPaus.jpg'
    );
    const christmasPlay = useTexture(
        './assets/laptopDisp/christmasLightPlay.jpg'
    );

    const clarityPause = useTexture('./assets/laptopDisp/clarityPaus.jpg');
    const clarityPlay = useTexture('./assets/laptopDisp/clarityPlay.jpg');

    const comeAndGetPause = useTexture(
        './assets/laptopDisp/comeAndGetYourLovePause.jpg'
    );
    const comeAndGetPlay = useTexture(
        './assets/laptopDisp/comeAndGetYourLovePlay.jpg'
    );

    const sunflowerPause = useTexture('./assets/laptopDisp/sunflowerPaus.jpg');
    const sunflowerPlay = useTexture('./assets/laptopDisp/sunflowerPlay.jpg');

    const [hovered, setHover] = useState(false);

    // State to manage the currently playing mesh
    const [playingMesh, setPlayingMesh] = useState(null);

    // Ref for the Howl instances
    const sounds = useRef({});

    // Audio files
    const audioFiles = useRef({
        Autumn: './assets/laptopDisp/audio/AutumnLeavesCover.mp3',
        Christmas: './assets/laptopDisp/audio/ChristmasLights.mp3',
        Clarity: './assets/laptopDisp/audio/Clarity.mp3',
        ComeAndGet: './assets/laptopDisp/audio/ComeAndGetYourLove.mp3',
        Sunflower: './assets/laptopDisp/audio/Sunflower.mp3'
    }).current;

    useEffect(() => {
        // Initialize Howl instances for each audio file
        sounds.current = {
            Autumn: new Howl({ src: [audioFiles.Autumn] }),
            Christmas: new Howl({ src: [audioFiles.Christmas] }),
            Clarity: new Howl({ src: [audioFiles.Clarity] }),
            ComeAndGet: new Howl({ src: [audioFiles.ComeAndGet] }),
            Sunflower: new Howl({ src: [audioFiles.Sunflower] })
        };

        // Cleanup Howl instances on component unmount
        return () => {
            Object.values(sounds.current).forEach((sound) => sound.unload());
        };
    }, [audioFiles]);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    const onPointerOver = useCallback(() => setHover(true), []);
    const onPointerOut = useCallback(() => setHover(false), []);

    const cameraState = useCameraStore((state) => state.cameraState);

    const handleMeshClick = (mesh) => {
        // Stop all sounds
        Object.values(sounds.current).forEach((sound) => sound.stop());

        if (playingMesh !== mesh) {
            // Play the selected sound
            sounds.current[mesh].play();
            setPlayingMesh(mesh);
        } else {
            // If the same mesh is clicked again, stop the sound
            setPlayingMesh(null);
        }
    };

    return (
        <>
            <mesh
                geometry={nodes.music1.geometry}
                position={nodes.music1.position}
                rotation={nodes.music1.rotation}
                scale={nodes.music1.scale}
                ref={autumn}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                onClick={() => handleMeshClick('Autumn')}
            >
                <meshBasicMaterial
                    map={playingMesh === 'Autumn' ? AutumnPlay : AutumnPause}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.music2.geometry}
                position={nodes.music2.position}
                rotation={nodes.music2.rotation}
                scale={nodes.music2.scale}
                ref={christmas}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                onClick={() => handleMeshClick('Christmas')}
            >
                <meshBasicMaterial
                    map={
                        playingMesh === 'Christmas'
                            ? christmasPlay
                            : christmasPause
                    }
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.music3.geometry}
                position={nodes.music3.position}
                rotation={nodes.music3.rotation}
                scale={nodes.music3.scale}
                ref={clarity}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                onClick={() => handleMeshClick('Clarity')}
            >
                <meshBasicMaterial
                    map={playingMesh === 'Clarity' ? clarityPlay : clarityPause}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.music4.geometry}
                position={nodes.music4.position}
                rotation={nodes.music4.rotation}
                scale={nodes.music4.scale}
                ref={comeAndGet}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                onClick={() => handleMeshClick('ComeAndGet')}
            >
                <meshBasicMaterial
                    map={
                        playingMesh === 'ComeAndGet'
                            ? comeAndGetPlay
                            : comeAndGetPause
                    }
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.music5.geometry}
                position={nodes.music5.position}
                rotation={nodes.music5.rotation}
                scale={nodes.music5.scale}
                ref={sunflower}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                onClick={() => handleMeshClick('Sunflower')}
            >
                <meshBasicMaterial
                    map={
                        playingMesh === 'Sunflower'
                            ? sunflowerPlay
                            : sunflowerPause
                    }
                    toneMapped={false}
                />
            </mesh>
        </>
    );
});

export default LaptopDisp;

useTexture.preload('./assets/laptopDisp/AutumnPaus.jpg');
useTexture.preload('./assets/laptopDisp/AutumnPlay.jpg');
useTexture.preload('./assets/laptopDisp/christmasLightPaus.jpg');
useTexture.preload('./assets/laptopDisp/christmasLightPlay.jpg');
useTexture.preload('./assets/laptopDisp/clarityPaus.jpg');
useTexture.preload('./assets/laptopDisp/clarityPlay.jpg');
useTexture.preload('./assets/laptopDisp/comeAndGetYourLovePause.jpg');
useTexture.preload('./assets/laptopDisp/comeAndGetYourLovePlay.jpg');
useTexture.preload('./assets/laptopDisp/sunflowerPaus.jpg');
useTexture.preload('./assets/laptopDisp/sunflowerPlay.jpg');
