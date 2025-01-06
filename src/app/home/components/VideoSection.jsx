'use client';
import Button from '@/app/components/button/Button';
import React from 'react';

const VideoSection = ({ pinRef, section1Ref, section2Ref, mediaContainerRef }) => {
    return (
        <div className='pin relative h-screen' ref={pinRef}>
            <section
                ref={section1Ref}
                className='sec1 w-full h-screen flex flex-col items-center justify-center gap-[40px] relative z-20'
            >
                <div className='text-center text-white uppercase -tracking-wider'>
                    <p className='font-proxima font-display1'>Set the trend</p>
                    <p className='font-proxima font-display1'>in digital fashion</p>
                </div>
                <Button label='Start for Free' />
            </section>
            <section ref={section2Ref} className='sec2 w-full h-screen absolute top-0 z-10 overflow-hidden'>
                <div
                    ref={mediaContainerRef}
                    className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight scale-90'
                >
                    <video autoPlay muted loop playsInline className='w-[1920px] h-[1080px] object-cover'>
                        <source src='/images/pattern/home/intro-demo-v.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
    );
};

export default VideoSection;
