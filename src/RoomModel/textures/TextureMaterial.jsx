import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

import fragmentShader from '../shaders/Room/fragment.glsl';
import vertexShader from '../shaders/Room/vertex.glsl';

const TextureMaterial = shaderMaterial(
    {
        nbakedm: new THREE.Texture(),
        dbakedm: new THREE.Texture(),
        lightMapm: new THREE.Texture(),

        NightMix: 0,

        lightBoardColor: new THREE.Color('#ff2d88'),
        lightBoardStrength: 1.35,

        lightPcColor: new THREE.Color('#4b7eff'),
        lightPcStrength: 1.2,

        lightDeskColor: new THREE.Color('#ff7236'),
        lightDeskStrength: 1.55
    },
    vertexShader,
    fragmentShader
);

export default TextureMaterial;
