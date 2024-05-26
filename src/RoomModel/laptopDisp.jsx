import { useGLTF, useTexture } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useCameraStore } from '../helper/CameraStore';


export default function LaptopDisp() {

    const Autumn = useRef();
    const christmas = useRef();
    const clarity = useRef();
    const comeAndGet = useRef();
    const sunflower = useRef();


    useGLTF.preload('./assets/laptopDisp/music.glb');
    const { nodes } = useGLTF('./assets/laptopDisp/music.glb');

    useTexture.preload('./assets/laptopDisp/AutumnPaus.jpg');
    useTexture.preload('./assets/laptopDisp/AutumnPlay.jpg');
    const AutumnPause = useTexture('./assets/laptopDisp/AutumnPaus.jpg');
    // const AutumnPlay = useTexture('./assets/laptopDisp/AutumnPlay.jpg');
    
    

    useTexture.preload('./assets/laptopDisp/christmasLightPaus.jpg');
    useTexture.preload('./assets/laptopDisp/christmasLightPlay.jpg');
    const christmasPause = useTexture('./assets/laptopDisp/christmasLightPaus.jpg');
    // const christmasPlay = useTexture('./assets/laptopDisp/christmasLightPlay.jpg');

    useTexture.preload('./assets/laptopDisp/clarityPaus.jpg');
    useTexture.preload('./assets/laptopDisp/clarityPlay.jpg');
    const clarityPause = useTexture('./assets/laptopDisp/clarityPaus.jpg');
    // const clarityPlay = useTexture('./assets/laptopDisp/clarityPlay.jpg');

    useTexture.preload('./assets/laptopDisp/comeAndGetYourLovePause.jpg');
    useTexture.preload('./assets/laptopDisp/comeAndGetYourLovePlay.jpg');
    const comeAndGetPause = useTexture('./assets/laptopDisp/comeAndGetYourLovePause.jpg');
    // const comeAndGetPlay = useTexture('./assets/laptopDisp/comeAndGetYourLovePlay.jpg');

    useTexture.preload('./assets/laptopDisp/sunflowerPaus.jpg');
    useTexture.preload('./assets/laptopDisp/sunflowerPlay.jpg');
    const sunflowerPause = useTexture('./assets/laptopDisp/sunflowerPaus.jpg');
    // const sunflowerPlay = useTexture('./assets/laptopDisp/sunflowerPlay.jpg');


    const [hovered, setHover] = useState(false);


    useEffect(
        () => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
        [hovered]
    );

    const onPointerOver = useCallback(() => setHover(true), []);
    const onPointerOut = useCallback(() => setHover(false), []);


    const cameraState = useCameraStore((state) => state.cameraState);
    return (
        <>
            <mesh
                geometry={nodes.music1.geometry}
                position={nodes.music1.position}
                rotation={nodes.music1.rotation}
                scale={nodes.music1.scale}
                ref={Autumn}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
                
                
            >
                <meshBasicMaterial map={AutumnPause } toneMapped={false}/>
            </mesh>
            <mesh
                geometry={nodes.music2.geometry}
                position={nodes.music2.position}
                rotation={nodes.music2.rotation}
                scale={nodes.music2.scale}
                ref={christmas}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
            >
                <meshBasicMaterial map={christmasPause} toneMapped={false} />
            </mesh>
            <mesh
                geometry={nodes.music3.geometry}
                position={nodes.music3.position}
                rotation={nodes.music3.rotation}
                scale={nodes.music3.scale}
                ref={clarity}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
            >
                <meshBasicMaterial map={clarityPause} toneMapped={false} />
            </mesh>
            <mesh
                geometry={nodes.music4.geometry}
                position={nodes.music4.position}
                rotation={nodes.music4.rotation}
                scale={nodes.music4.scale}
                ref={comeAndGet}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
            >
                <meshBasicMaterial map={comeAndGetPause} toneMapped={false}/>
            </mesh>
            <mesh
                geometry={nodes.music5.geometry}
                position={nodes.music5.position}
                rotation={nodes.music5.rotation}
                scale={nodes.music5.scale}
                ref={sunflower}
                onPointerOver={cameraState === 'laptop' ? onPointerOver : null}
                onPointerOut={cameraState === 'laptop' ? onPointerOut : null}
            >
                <meshBasicMaterial map={sunflowerPause} toneMapped={false}/>
            </mesh>

            
        </>
    );
}
