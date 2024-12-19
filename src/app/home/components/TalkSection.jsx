'use client';

import { Container } from '@/app/components/layout/main';
import { Box, Globe, Rocket, Shirt, Sparkles } from 'lucide-react';
import React from 'react';

const TalkSection = () => {
    return (
        <>
            <section className='min-h-screen flex items-center justify-center '>
                <Container className='cont'>
                    <div className='font-mobile-display2 font-proxima'>
                        <div className='font-talk text-[rgb(64,64,64)]'>We,</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>the</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>PRETCOORD</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>team,</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>make</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>it</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>possible</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>to</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>bring</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>your</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>fashion</div>
                        <Shirt size={36} color='#2aea65' strokeWidth={2.5} className='inline-block mx-1' />
                        <div className='font-talk text-[rgb(64,64,64)]'>into</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>the</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>digital</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>world</div>
                        <Globe size={36} color='#2aea65' strokeWidth={2.5} className='inline-block mx-1' />
                        <div className='font-talk text-[rgb(64,64,64)]'>With</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>cutting-edge</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>3D</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>technology</div>
                        <Box size={36} color='#2aea65' strokeWidth={2.5} className='inline-block mx-1' />
                        <div className='font-talk text-[rgb(64,64,64)]'>we</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>empower</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>your</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>creative</div>
                        <Rocket size={36} color='#2aea65' strokeWidth={2.5} className='inline-block mx-1' />
                        <div className='font-talk text-[rgb(64,64,64)]'>vision,</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>transforming</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>ideas</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>into</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>reality</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>and</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>seamlessly</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>integrating</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>fashion</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>into</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>the</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>digital</div>
                        <div className='font-talk text-[rgb(64,64,64)]'>space</div>
                        <Sparkles size={36} color='#2aea65' strokeWidth={2.5} className='inline-block mx-1' />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default TalkSection;
