'use client';

import { Container } from '@/app/components/layout/main';
import { TALK_SECTION_DATA } from '@/app/data/texts';
import { useTalkSectionAnimation } from '@/app/hooks/useGsapAnimation';
import { Box, Globe, Rocket, Shirt, Sparkles } from 'lucide-react';
import React from 'react';

const TalkSection = () => {
    const { pinTwoRef, addToTextRefs, addToIconRefs } = useTalkSectionAnimation();

    const renderIcon = (index) => {
        const IconComponents = [Shirt, Globe, Box, Rocket, Sparkles];
        const iconIndex = Math.floor(index / 10);
        const IconComponent = IconComponents[iconIndex];
        return (
            <div key={`icon-${index}`} ref={addToIconRefs} className='inline-block mx-1'>
                <IconComponent size={36} strokeWidth={2.5} />
            </div>
        );
    };

    return (
        <section className='min-h-screen flex items-center justify-center relative' ref={pinTwoRef}>
            <Container className='cont'>
                <div className='m-auto font-mobile-display2 font-proxima'>
                    {TALK_SECTION_DATA.map((text, index) => {
                        if (text === null) {
                            return renderIcon(index);
                        }
                        return (
                            <div
                                key={index}
                                ref={addToTextRefs}
                                className='font-talk text-[rgb(64,64,64)] inline-block mr-2'
                            >
                                {text}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default TalkSection;
