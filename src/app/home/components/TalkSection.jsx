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
        const nullToIconIndex = {
            11: 0, // Shirt
            16: 1, // Globe
            21: 2, // Box
            26: 3, // Rocket
            40: 4, // Sparkles
        };
        const IconComponent = IconComponents[nullToIconIndex[index]];
        return IconComponent ? (
            <div key={`icon-${index}`} ref={addToIconRefs} className='inline-block mx-1'>
                <IconComponent size={36} strokeWidth={2.5} />
            </div>
        ) : null;
    };

    return (
        <section className='h-screen flex items-center justify-center relative' ref={pinTwoRef}>
            <div className='flex items-center justify-center'>
                <Container>
                    <div className='m-auto font-mobile-display2 font-proxima'>
                        {TALK_SECTION_DATA.map((text, index) => {
                            if (text === null) {
                                return renderIcon(index);
                            }
                            return (
                                <span
                                    key={index}
                                    ref={addToTextRefs}
                                    className='font-talk text-[rgb(64,64,64)] inline-block mr-2'
                                >
                                    {text}
                                </span>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </section>
    );
};

TalkSection.displayName = 'TalkSection';

export default TalkSection;
