import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
// import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
// import { useControls } from 'leva';
import { useEffect } from 'react';

import { useCameraStore } from '../helper/CameraStore';
import PhotoFrame from './photoFrame';


export default function DispFrame() {
    useGLTF.preload('./assets/roombasedraco.glb');
    const { nodes } = useGLTF('./assets/roombasedraco.glb');

    const cameraState = useCameraStore((state) => state.cameraState);

    const defaultState = useCameraStore((state) => state.default);
    const desktopState = useCameraStore((state) => state.desktop);

    // const { controle } = useCameraStore();

    const { camera } = useThree();

    // const { cameraPosition } = useControls({
    //     cameraPosition: {
    //         value : {
    //             x: 10,
    //             y: 8,
    //             z: -10,
    //         },
    //         step: 0.05
    //     },
    // });

    // useFrame(()=>{
    //     camera.position.x = cameraPosition.x;
    //     camera.position.y = cameraPosition.y;
    //     camera.position.z = cameraPosition.z;
    // });

    // console.log(cameraState);

    

    useEffect(()=>{

        if(cameraState === "default"){
            
            useCameraStore.setState({controle: false});
            gsap.to(camera.position,{
                x: 10,
                y: 8,
                z: -10,
                duration: 1,
                ease: "power1.inOut"
            });
            setTimeout(()=>{
                useCameraStore.setState({controle: true});
            },1500);
            
            console.log("default");
            console.log(camera.position);
        }
        if(cameraState === "desktop"){
            useCameraStore.setState({controle: false});
            gsap.to(camera.position,{
                x: 5,
                y: 4,
                z: -5,
                duration: 1,
                ease: "power1.inOut"
            });
            setTimeout(()=>{
                useCameraStore.setState({controle: true});
            },1500);
             
            console.log("desktop");
            console.log(camera.position);
        }

    },[cameraState, camera]);

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
