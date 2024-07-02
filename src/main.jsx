import './style.css';

import { Analytics } from '@vercel/analytics/react';
import { Leva } from 'leva';
import ReactDOM from 'react-dom/client';

import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <>
        <Experience />
        <Leva collapsed />
        <Analytics mode={'production'} />
    </>
);
