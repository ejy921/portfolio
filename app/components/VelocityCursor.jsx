'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import MouseFollower from 'mouse-follower';

MouseFollower.registerGSAP(gsap);

const VelocityCursor = ({size = 30, color = '#000', speed = 0.5, skewing = 3}) => {

    useEffect(() => {
        if (typeof window == 'undefined') return;

        const cursor = new MouseFollower({
            el: null,
            speed: speed,
            skewing: skewing,
            skewingText: 0,
        });

        document.documentElement.style.setProperty('--mf-size', `${size}px`);
        document.documentElement.style.setProperty('--mf-color', color);

        return () => {
            cursor.destroy();
        };

    }, [size, color, speed, skewing]);

    return null;
};


export default VelocityCursor;