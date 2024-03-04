import './style.css';

import { Canvas } from '@react-three/fiber';
import ReactDOM from 'react-dom/client';

import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const created = () => {};

root.render(
    <Canvas
        flat
        camera={{
            fov: 35,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6]
        }}
        onCreated={created}
    >
        <Experience />
    </Canvas>
);
