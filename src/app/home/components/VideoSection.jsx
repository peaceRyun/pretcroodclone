'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Video from './Video';

const VideoSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=100%',
                scrub: true,
                pin: true,
                markers: false,
            },
        });

        tl.from(headingRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={sectionRef} className='relative w-full h-screen overflow-hidden'>
            <Video />
        </div>
    );
};

export default VideoSection;
