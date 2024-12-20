// hooks/useGsapAnimation.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { TALK_SECTION_DATA } from '../data/texts';

export const useHomeAnimation = () => {
    const pinRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        if (!gsap.plugins?.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinRef.current,
                start: 'top top',
                end: '+=100%',
                pin: true,
                pinSpacing: true,
                scrub: 1.5,
            },
        });

        timeline
            .fromTo(section2Ref.current, { y: '80vh' }, { y: '0', ease: 'none', duration: 1.5 })
            .to(imageContainerRef.current, {
                scale: 1.0,
                duration: 1.5,
                ease: 'none',
            })
            .to(imageContainerRef.current, {
                scale: 1.2,
                duration: 5,
                ease: 'expo.out',
            });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return { pinRef, section1Ref, section2Ref, imageContainerRef };
};

export const useTalkSectionAnimation = () => {
    const pinTwoRef = useRef(null);
    const textRefs = useRef([]);
    const iconRefs = useRef([]);
    const timelineRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (!gsap.plugins?.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        if (isInitializedRef.current) return;
        isInitializedRef.current = true;

        const cleanupTriggers = () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
                timelineRef.current = null;
            }
            ScrollTrigger.getAll()
                .filter((trigger) => trigger.vars.trigger === pinTwoRef.current)
                .forEach((trigger) => trigger.kill());
        };

        cleanupTriggers();

        const initAnimation = () => {
            if (!pinTwoRef.current || textRefs.current.length === 0) return;

            timelineRef.current = gsap.timeline({
                scrollTrigger: {
                    trigger: pinTwoRef.current,
                    start: 'top top',
                    end: '+=100%',
                    pin: true,
                    pinSpacing: true,
                    scrub: 20,
                    ease: 'none',
                },
            });

            // TALK_SECTION_DATA를 순회하면서 텍스트와 아이콘 애니메이션을 처리
            let textIndex = 0;
            let iconIndex = 0;

            TALK_SECTION_DATA.forEach((item, index) => {
                if (item === null) {
                    // 아이콘 애니메이션
                    const iconElement = iconRefs.current[iconIndex];
                    const svgElement = iconElement?.querySelector('svg');
                    if (svgElement) {
                        timelineRef.current.fromTo(
                            svgElement,
                            { attr: { stroke: 'rgb(64,64,64)' } },
                            {
                                attr: { stroke: '#2aea65' },
                                duration: 0.1,
                                ease: 'none',
                            },
                            index * 0.2 // null 위치에 맞춰 타이밍 설정
                        );
                    }
                    iconIndex++;
                } else {
                    // 텍스트 애니메이션
                    const textElement = textRefs.current[textIndex];
                    if (textElement) {
                        timelineRef.current.fromTo(
                            textElement,
                            { color: 'rgb(64,64,64)' },
                            {
                                color: '#ffffff',
                                duration: 0.1,
                                ease: 'none',
                            },
                            index * 0.2 // TALK_SECTION_DATA의 인덱스에 맞춰 타이밍 설정
                        );
                    }
                    textIndex++;
                }
            });
        };

        const timeoutId = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timeoutId);
            cleanupTriggers();
            isInitializedRef.current = false;
        };
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current = [...textRefs.current.filter(Boolean), el];
        }
    };

    const addToIconRefs = (el) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current = [...iconRefs.current.filter(Boolean), el];
        }
    };

    return { pinTwoRef, addToTextRefs, addToIconRefs };
};
