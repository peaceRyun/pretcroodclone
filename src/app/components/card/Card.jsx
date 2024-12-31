import React, { useRef, useEffect, useState, forwardRef } from 'react';
import gsap from 'gsap';
import { ButtonBlack, ButtonWhite } from '../button/Button';
import { Check } from 'lucide-react';

const MiniCard = ({ subtitle, p, onMouseEnter, onMouseLeave }) => {
    const cardRef = useRef(null);
    const titleRef = useRef(null);
    const textWrapRef = useRef(null);
    const textContentRef = useRef(null);
    const timelineRef = useRef(null);

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

        // Cleanup function
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    const handleMouseEnter = () => {
        // Kill any existing animation
        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();

        timelineRef.current
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
                    duration: 0.7,
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
                    delay: 0.2,
                    ease: 'power3.out',
                },
                '<'
            );

        onMouseEnter?.();
    };

    const handleMouseLeave = () => {
        // Kill any existing animation
        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();

        timelineRef.current
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

export const PlanCard = forwardRef((props, ref) => {
    return (
        <>
            <div ref={ref} className='p-5 flex flex-col gap-5 bgc-g60 rounded-xl'>
                <div className='plan-header flex flex-col gap-5 text-white font-proxima-normal'>
                    <span className='text-sm font-bold'>Standalone</span>
                    <h3 className='font-proxima font-display4-h3'>Individual</h3>
                    <p className='font-normal text-sm text-gray-30'>
                        Perfect for individuals or sole proprietors seeking to design and create 3D fashion.
                    </p>
                </div>
                <ButtonWhite label='Start for Free' />
                <div className='plan-detail flex flex-col gap-4 text-white font-proxima-normal'>
                    <div>
                        <h4 className='text-sm text-gray-30'>User Count</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Single user</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-30'>Training</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Online Manuals and Tutorials</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-30'>Assets</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>In-app assets included</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export const PlanCardWhite = ({ category }) => {
    return (
        <>
            <div className='p-5 flex flex-col gap-5 bgc-g30 rounded-xl'>
                <div className='plan-header flex flex-col gap-5  font-proxima-normal'>
                    <span className='text-sm font-bold'>{category}</span>
                    <h3 className='font-proxima font-display4-h3'>Enterprise</h3>
                    <p className='font-normal text-sm text-gray-60'>
                        Perfect for teams or companies aiming to integrate 3D fashion into digital platforms.
                    </p>
                </div>
                <ButtonBlack label='Contact Sales' />
                <div className='plan-detail flex flex-col gap-4 font-proxima-normal'>
                    <div>
                        <h4 className='text-sm text-gray-60'>User Count</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Single user</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-60'>Management</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>End user management</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-60'>Consulting</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Support for building a digital team</span>
                        </div>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Share techniques and expertise</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-60'>Training</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>Online Manuals and Tutorials</span>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-gray-60'>User Count</h4>
                        <div className='flex flex-start gap-2 items-center'>
                            <Check size={16} />
                            <span className='text-base'>In-app assets included</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniCard;
