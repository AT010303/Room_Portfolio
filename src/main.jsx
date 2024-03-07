import './style.css';

import { Loader } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Suspense fallback:null>
            <Canvas
                camera={{
                    fov: 35,
                    near: 0.1,
                    far: 200,
                    position: [10, 5, -10]
                }}
            >
                <color args={['#201919']} attach="background" />
                <EffectComposer
                    enabled:true
                    disableNormalPass:true
                ></EffectComposer>
                <Experience />
            </Canvas>
        </Suspense>
        <Loader />
    </>
);
