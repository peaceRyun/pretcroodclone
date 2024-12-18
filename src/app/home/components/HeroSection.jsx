'use client';
import Button from '@/app/components/button/Button';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='relative w-full h-[90vh]'>
            <div className='flex flex-col items-center justify-center h-full gap-[40px]'>
                <div className='text-center text-white uppercase -tracking-wider'>
                    <p className='font-proxima font-mobile-display1 '>Set the trend</p>
                    <p className='font-proxima font-mobile-display1'>in digital fashion</p>
                </div>
                <Button label='Start for Free' />
            </div>
        </div>
    );
};

export default HeroSection;
