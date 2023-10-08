import './style.css'
import Experience from './Experience/Experience.js'
import { inject } from '@vercel/analytics'

inject();

const experience = new Experience({
    targetElement: document.querySelector('.experience')
})

