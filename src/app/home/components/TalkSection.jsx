'use client';

import { Container } from '@/app/components/layout/main';
import { TALK_SECTION_DATA } from '@/app/data/texts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Box, Globe, Rocket, Shirt, Sparkles } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

const TalkSection = () => {
    const pinTwoRef = useRef(null);
    const textRefs = useRef([]);
    const iconRefs = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinTwoRef.current,
                start: 'top top',
                end: '+=250%',
                pin: true,
                pinSpacing: true,
                scrub: 1.5,
            },
        });

        // 텍스트 애니메이션
        textRefs.current.forEach((element, index) => {
            timeline.set(
                element,
                {
                    color: '#ffffff',
                },
                index * 0.05
            );
        });

        // 아이콘 애니메이션
        iconRefs.current.forEach((element, index) => {
            // SVG 내부의 모든 요소를 선택
            const svgElements = element.querySelector('svg');
            if (svgElements) {
                timeline.set(
                    svgElements,
                    {
                        attr: { stroke: '#2aea65' },
                    },
                    index * 0.1
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    const addToIconRefs = (el) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current.push(el);
        }
    };

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
                <div className='font-mobile-display2 font-proxima'>
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
