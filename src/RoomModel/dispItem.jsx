import { useGLTF, useTexture } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import TextureMaterial from './textures/TextureMaterial';
extend({ TextureMaterial });

// eslint-disable-next-line react/prop-types
export default function DispItem({ toggle }) {
    const dispItm = useRef();
    const desktopdisp = useRef();
    const musicdisp = useRef();

    useEffect(() => {
        gsap.to(dispItm.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(desktopdisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
        gsap.to(musicdisp.current.uniforms.NightMix, {
            value: toggle ? 1 : 0,
            duration: 1
        });
    }, [toggle]);

    useGLTF.preload('./assets/new/dispItem.glb');
    useTexture.preload('./assets/new/boardBakedD.jpg');

    const { nodes } = useGLTF('./assets/new/dispItem.glb');

    const dBakeddisp = useTexture('./assets/new/boardBakedD.jpg');
    dBakeddisp.flipY = false;
    dBakeddisp.magFilter = THREE.NearestFilter;
    dBakeddisp.minFilter = THREE.NearestFilter;

    const nBakeddisp = useTexture('./assets/new/boardBakedN.jpg');
    nBakeddisp.flipY = false;
    nBakeddisp.magFilter = THREE.NearestFilter;
    nBakeddisp.minFilter = THREE.NearestFilter;

    const lightMapdisp = useTexture('./assets/new/boardBakedLMAP.jpg');
    nBakeddisp.flipY = false;
    nBakeddisp.magFilter = THREE.NearestFilter;
    nBakeddisp.minFilter = THREE.NearestFilter;

    console.log(nodes);
    const TextureMaterialDisps = {
        dbakedm: dBakeddisp,
        nbakedm: nBakeddisp,
        lightMapm: lightMapdisp,
        NightMix: 0,
        lightBoardColor: '#fff',
        lightBoardStrength: 0,
        lightPcColor: '#fff',
        lightPcStrength: 0,
        lightDeskColor: '#fff',
        lightDeskStrength: 0
    };

    return (
        <>
            <mesh
                geometry={nodes.dispItm.geometry}
                position={nodes.dispItm.position}
                rotation={nodes.dispItm.rotation}
            >
                <textureMaterial {...TextureMaterialDisps} ref={dispItm} />
            </mesh>
            <mesh
                geometry={nodes.rope.geometry}
                position={nodes.rope.position}
                rotation={nodes.rope.rotation}
            
            >
                <meshBasicMaterial color={'#160000'} />

            </mesh>

            <mesh
                geometry={nodes.desktop.geometry}
                position={nodes.desktop.position}
                rotation={nodes.desktop.rotation}
            >
                <textureMaterial {...TextureMaterialDisps} ref={desktopdisp} />

            </mesh>

            <mesh
                geometry={nodes.music.geometry}
                position={nodes.music.position}
                rotation={nodes.music.rotation}
            >
                <textureMaterial {...TextureMaterialDisps} ref={musicdisp} />

            </mesh>
        </>
    );
}

//
// D:\Web\portfolio\public\assets\new\boardBakedD.jpg
