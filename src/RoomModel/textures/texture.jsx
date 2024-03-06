import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader from '../shaders/Room/fragment.glsl';
import vertexShader from '../shaders/Room/vertex.glsl';

let colors = {};
colors.boardColor = '#ff64a6';
colors.pcColor = '#4b7eff';
colors.deskColor = '#ffa27a';

const TextureMaterial = shaderMaterial(
    {
        nbakedm: new THREE.Texture(),
        dbakedm: new THREE.Texture(),
        lightMapm: new THREE.Texture(),

        NightMix: 0,

        lightBoardColor: new THREE.Color(colors.boardColor),
        lightBoardStrength: 1.35,

        lightPcColor: new THREE.Color(colors.pcColor),
        lightPcStrength: 1.2,

        lightDeskColor: new THREE.Color(colors.deskColor),
        lightDeskStrength: 1.55
    },
    vertexShader,
    fragmentShader
);

extend({ TextureMaterial });

export default TextureMaterial;
