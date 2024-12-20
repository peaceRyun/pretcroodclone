// hooks/useGsapAnimation.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

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

    useEffect(() => {
        if (!gsap.plugins?.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        const cleanupTriggers = () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
            ScrollTrigger.getAll()
                .filter((trigger) => trigger.vars.trigger === pinTwoRef.current)
                .forEach((trigger) => trigger.kill());
        };

        cleanupTriggers();

        timelineRef.current = gsap.timeline({
            scrollTrigger: {
                trigger: pinTwoRef.current,
                start: 'top top',
                end: '+=100%',
                pin: true,
                pinSpacing: true,
                scrub: 1.5,
            },
        });

        // 텍스트 애니메이션
        textRefs.current.forEach((element, index) => {
            timelineRef.current.set(element, { color: '#ffffff' }, index * 0.05);
        });

        // 아이콘 애니메이션
        iconRefs.current.forEach((element, index) => {
            const svgElements = element?.querySelector('svg');
            if (svgElements) {
                timelineRef.current.set(svgElements, { attr: { stroke: '#2aea65' } }, index * 0.1);
            }
        });

        return cleanupTriggers;
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current = [...textRefs.current.filter((ref) => ref !== null), el];
        }
    };

    const addToIconRefs = (el) => {
        if (el && !iconRefs.current.includes(el)) {
            iconRefs.current = [...iconRefs.current.filter((ref) => ref !== null), el];
        }
    };

    return { pinTwoRef, addToTextRefs, addToIconRefs };
};
