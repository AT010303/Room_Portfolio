import './style.css'
import Experience from './Experience/Experience.js'
import { inject } from '@vercel/analytics'

inject({
    debug : false,
});

const experience = new Experience({
    targetElement: document.querySelector('.experience')
})

