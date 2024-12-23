import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const MiniCard = ({ subtitle, p, onMouseEnter, onMouseLeave }) => {
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const textWrapRef = useRef(null);
    const textContentRef = useRef(null);
    useEffect(() => {
        // 초기 설정
        gsap.set(textWrapRef.current, {
            height: 0,
            opacity: 0,
        });

        gsap.set(textContentRef.current, {
            yPercent: 50,
            opacity: 0,
        });
    }, []);

    const handleMouseEnter = () => {
        const timeline = gsap.timeline();

        timeline
            .to(cardRef.current, {
                backgroundColor: '#ffffff',
                duration: 0.3,
                ease: 'power3.out',
            })
            .to(
                titleRef.current,
                {
                    scale: 1.4,
                    color: '#131313',
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            )
            .to(
                textWrapRef.current,
                {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            )
            .to(
                textContentRef.current,
                {
                    opacity: 1,
                    yPercent: 0,
                    color: '#131313',
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            );

        onMouseEnter?.();
    };

    const handleMouseLeave = () => {
        const timeline = gsap.timeline();

        timeline
            .to(cardRef.current, {
                backgroundColor: '#191919',
                duration: 0.3,
                ease: 'power3.out',
            })
            .to(
                titleRef.current,
                {
                    scale: 1,
                    color: '#ffffff',
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            )
            .to(
                textContentRef.current,
                {
                    opacity: 0,
                    yPercent: 50,
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            )
            .to(
                textWrapRef.current,
                {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power3.out',
                },
                '<'
            );

        onMouseLeave?.();
    };

    return (
        <div
            ref={cardRef}
            className='bg-zinc-900 text-white block rounded-3xl w-full text-left p-7 lg:flex lg:items-start lg:justify-between lg:p-14'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='title-wrap w-full lg:flex-1 pr-0 lg:pr-8'>
                <h3 ref={titleRef} className='font-proxima font-display3-desktop origin-left'>
                    {subtitle}
                </h3>
            </div>

            <div ref={textWrapRef} className='text-wrap w-full lg:flex-1 mt-6 lg:mt-0 pl-0 lg:pl-8 overflow-hidden'>
                <div ref={textContentRef}>
                    <p className='font-proxima-normal font-bold text-xs leading-6 lg:text-lg'>{p}</p>
                </div>
            </div>
        </div>
    );
};

export default MiniCard;
