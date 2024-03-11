import './style.css';

import { Leva } from 'leva';
import ReactDOM from 'react-dom/client';

import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Experience />
        <Leva />
    </>
);
