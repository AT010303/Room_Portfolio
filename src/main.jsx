import './style.css';

import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import ReactDOM from 'react-dom/client';

import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const created = () => {};

root.render(
    <Canvas
        camera={{
            fov: 35,
            near: 0.1,
            far: 200,
            position: [10, 5, -10]
        }}
        onCreated={created}
    >
        <EffectComposer enabled:true disableNormalPass:true>
            <Experience />
        </EffectComposer>
    </Canvas>
);
