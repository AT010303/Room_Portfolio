import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

import fragmentShader from '../shaders/DispBoard/fragment.glsl';
import vertexShader from '../shaders/Room/vertex.glsl';

const TextureMaterialDisp = shaderMaterial(
    {
        nBakeddisp: new THREE.Texture(),
        dBakeddisp: new THREE.Texture(),
        NightMixDisp: new THREE.Texture(),

        NightMix: 0
    },
    vertexShader,
    fragmentShader
);

export default TextureMaterialDisp;
