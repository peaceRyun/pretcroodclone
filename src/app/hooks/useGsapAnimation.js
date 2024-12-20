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
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (!gsap.plugins?.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        // 이미 초기화되었다면 리턴
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

        // 새로운 타임라인 생성 전에 기존 것들 정리
        cleanupTriggers();

        // refs가 모두 설정된 후에 애니메이션 시작
        const initAnimation = () => {
            if (!pinTwoRef.current || textRefs.current.length === 0) return;

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
                if (element) {
                    timelineRef.current.set(element, { color: '#ffffff' }, index * 0.05);
                }
            });

            // 아이콘 애니메이션
            iconRefs.current.forEach((element, index) => {
                const svgElements = element?.querySelector('svg');
                if (svgElements) {
                    timelineRef.current.set(svgElements, { attr: { stroke: '#2aea65' } }, index * 0.1);
                }
            });
        };

        // 약간의 지연 후 애니메이션 초기화
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
