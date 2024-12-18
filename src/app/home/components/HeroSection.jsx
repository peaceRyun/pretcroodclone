'use client';
import Button from '@/app/components/button/Button';
import React from 'react';

const HeroSection = () => {
    return (
        <section className='w-full h-[95vh] fullHeight-h flex flex-col items-center justify-center gap-[40px]'>
            <div className='text-center text-white uppercase -tracking-wider'>
                <p className='font-proxima font-mobile-display1 '>Set the trend</p>
                <p className='font-proxima font-mobile-display1'>in digital fashion</p>
            </div>
            <Button label='Start for Free' />
        </section>
    );
};

export default HeroSection;
