import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MiniCard = ({ subtitle, p, isActive, onMouseEnter, onMouseLeave }) => {
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        // Initial setup
        gsap.set(paragraphRef.current, {
            opacity: 0,
            display: 'none',
        });
    }, []);

    const handleMouseEnter = () => {
        const timeline = gsap.timeline({
            onStart: () => {
                // Ensure paragraph is visible before animating
                gsap.set(paragraphRef.current, { display: 'block' });
            },
        });

        timeline
            .to(cardRef.current, {
                backgroundColor: '#ffffff',
                color: '#000000',
                duration: 0.3,
                ease: 'power2.out',
            })
            .to(
                titleRef.current,
                {
                    scale: 1.4,
                    marginBottom: '0.75rem',
                    duration: 0.3,
                    ease: 'power2.out',
                },
                '<'
            )
            .to(
                paragraphRef.current,
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                },
                '<'
            );

        onMouseEnter?.();
    };

    const handleMouseLeave = () => {
        const timeline = gsap.timeline({
            onComplete: () => {
                // Hide paragraph after animation
                gsap.set(paragraphRef.current, { display: 'none' });
            },
        });

        timeline
            .to(cardRef.current, {
                backgroundColor: '#18181b', // zinc-900
                color: '#ffffff',
                duration: 0.3,
                ease: 'power2.out',
            })
            .to(
                titleRef.current,
                {
                    scale: 1,
                    marginBottom: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                },
                '<'
            )
            .to(
                paragraphRef.current,
                {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                },
                '<'
            );

        onMouseLeave?.();
    };

    return (
        <div
            ref={cardRef}
            className='block rounded-3xl w-full text-left lg:flex lg:items-start lg:gap-4 p-7 lg:p-14 bg-zinc-900 text-white'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3 ref={titleRef} className='font-proxima font-display3-desktop lg:w-1/2 origin-left'>
                {subtitle}
            </h3>
            <p ref={paragraphRef} className='font-proxima font-bold text-sm leading-6 lg:w-1/2'>
                {p}
            </p>
        </div>
    );
};

export default MiniCard;
