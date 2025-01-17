// hooks/useGsapAnimation.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { TALK_SECTION_DATA } from '../data/texts';
import './gsapInit';

export const useHomeAnimation = () => {
    const pinRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const mediaContainerRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinRef.current,
                start: 'top top',
                end: '+=600%',
                pin: true,
                pinSpacing: true,
                scrub: 1.5,
            },
        });

        timeline
            .fromTo(section2Ref.current, { y: '80vh' }, { y: '0', ease: 'none', duration: 2 })
            .to(mediaContainerRef.current, {
                scale: 1.0,
                duration: 1.5,
                ease: 'none',
            })
            .to(mediaContainerRef.current, {
                scale: 1.2,
                duration: 4,
                ease: 'expo.out',
            });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return { pinRef, section1Ref, section2Ref, mediaContainerRef };
};

export const useTalkSectionAnimation = () => {
    const pinTwoRef = useRef(null);
    const textRefs = useRef([]);
    const iconRefs = useRef([]);
    const timelineRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
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
                    end: '+=600%',
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
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

export const useSlideAnimation = () => {
    const sectionRef = useRef(null); // 전체 섹션을 위한 ref 추가
    const slidesRef = useRef(null);
    const timelineRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (isInitializedRef.current) return;
        isInitializedRef.current = true;

        const cleanupTriggers = () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
                timelineRef.current = null;
            }
            ScrollTrigger.getAll()
                .filter((trigger) => trigger.vars.trigger === sectionRef.current)
                .forEach((trigger) => trigger.kill());
        };

        const initAnimation = () => {
            if (!slidesRef.current || !sectionRef.current) return;

            const slides = slidesRef.current;
            const slideWidth = slides.scrollWidth - slides.offsetWidth;

            timelineRef.current = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=100%',
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            timelineRef.current.to(slides, {
                x: -slideWidth,
                ease: 'none',
                duration: 1,
            });
        };

        const initTimeout = setTimeout(() => {
            cleanupTriggers();
            initAnimation();
        }, 500);

        // Cleanup
        return () => {
            clearTimeout(initTimeout);
            cleanupTriggers();
            isInitializedRef.current = false;
        };
    }, []);

    return { sectionRef, slidesRef };
};

export const usePlanSectionAnimation = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const timelineRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (isInitializedRef.current) return;
        isInitializedRef.current = true;

        const cleanupTriggers = () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
                timelineRef.current = null;
            }
            ScrollTrigger.getAll()
                .filter((trigger) => trigger.vars.trigger === sectionRef.current)
                .forEach((trigger) => trigger.kill());
        };

        const initAnimation = () => {
            if (!sectionRef.current || !titleRef.current || cardsRef.current.length === 0) return;

            // 초기 상태 설정
            gsap.set(titleRef.current, {
                opacity: 0,
                yPercent: 100,
            });

            gsap.set(cardsRef.current, {
                opacity: 0,
                yPercent: 100,
            });

            timelineRef.current = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center',
                    end: '+=100%',
                    pin: false,
                    scrub: false,
                },
            });

            // 타이틀 애니메이션
            timelineRef.current
                .to(titleRef.current, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                })
                // 카드 애니메이션
                .to(
                    cardsRef.current,
                    {
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'power2.out',
                    },
                    '-=0.4'
                ); // 타이틀 애니메이션이 끝나기 0.4초 전에 시작
        };

        const timeoutId = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timeoutId);
            cleanupTriggers();
            isInitializedRef.current = false;
        };
    }, []);

    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current = [...cardsRef.current.filter(Boolean), el];
        }
    };

    return { sectionRef, titleRef, addToCardsRef };
};

export const useFooterLogoAnimation = () => {
    const logoRef = useRef(null);
    const timelineRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (isInitializedRef.current) return;
        isInitializedRef.current = true;

        const cleanupTriggers = () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
                timelineRef.current = null;
            }
            ScrollTrigger.getAll()
                .filter((trigger) => trigger.vars.trigger === logoRef.current)
                .forEach((trigger) => trigger.kill());
        };

        const initAnimation = () => {
            if (!logoRef.current) return;

            const logoElements = [
                '.logo-p',
                '.logo-r',
                '.logo-e',
                '.logo-t',
                '.logo-c',
                '.logo-o',
                '.logo-o2',
                '.logo-r2',
                '.logo-d',
            ];

            const logoOpt = {
                trigger: logoRef.current,
                start: 'top 50%',
            };

            timelineRef.current = gsap.timeline({
                scrollTrigger: logoOpt,
            });

            // Animate each letter with increasing delay
            logoElements.forEach((element, index) => {
                timelineRef.current.from(
                    logoRef.current.querySelector(element),
                    {
                        duration: 0.6 + index * 0.2,
                        opacity: 1,
                        yPercent: 102 + index * 10,
                        ease: 'power3.out',
                    },
                    index * 0.1
                );
            });
        };

        const timeoutId = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timeoutId);
            cleanupTriggers();
            isInitializedRef.current = false;
        };
    }, []);

    return { logoRef };
};

export const useButtonPopupAnimation = () => {
    const textRef = useRef(null);
    const iconRef = useRef(null);
    const buttonRef = useRef(null);
    const timelineRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const handleHoverAnimation = (isHovered) => {
        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();

        if (isHovered) {
            timelineRef.current
                .to(iconRef.current, {
                    opacity: 0,
                    duration: 0.15,
                    ease: 'power2.inOut',
                })
                .to(
                    textRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.15,
                        ease: 'power2.inOut',
                    },
                    '-=0.2'
                );
        } else {
            timelineRef.current
                .to(textRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 0.15,
                    ease: 'power2.inOut',
                })
                .to(
                    iconRef.current,
                    {
                        opacity: 1,
                        duration: 0.15,
                        ease: 'power2.inOut',
                    },
                    '-=0.2'
                );
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // 스크롤이 맨 위일 때
            if (scrollTop < 100) {
                gsap.to(buttonRef.current, {
                    opacity: 0,
                    y: '100px', // 아래로 숨김
                    duration: 0.15,
                    ease: 'power2.inOut',
                });
                return;
            }

            // 스크롤 중일 때도 아래로 숨김
            gsap.to(buttonRef.current, {
                opacity: 1,
                y: '100px',
                duration: 0.15,
                ease: 'power2.inOut',
            });

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // 스크롤이 멈추면 버튼을 위로 올림
            scrollTimeoutRef.current = setTimeout(() => {
                if (scrollTop >= 100) {
                    gsap.fromTo(
                        buttonRef.current,
                        { y: '100px' },
                        {
                            y: '0px',
                            duration: 0.15,
                            ease: 'power2.out',
                        }
                    );
                }
            }, 300);
        };

        // 초기 상태 설정 - 아래에 숨겨진 상태로 시작
        gsap.set(buttonRef.current, {
            opacity: window.scrollY < 100 ? 0 : 1,
            y: '100px',
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);

    return {
        textRef,
        iconRef,
        buttonRef,
        handleHoverAnimation,
        handleScrollToTop,
    };
};

export const useHeaderAnimation = () => {
    const headerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤 시작시 헤더를 위로 숨김
            gsap.to(headerRef.current, {
                y: '-100%',
                duration: 0.15,
                ease: 'power2.inOut',
            });

            // 이전 타임아웃 제거
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // 스크롤이 멈춘 후 500ms 후에 헤더를 다시 표시
            scrollTimeoutRef.current = setTimeout(() => {
                gsap.to(headerRef.current, {
                    y: '0%',
                    duration: 0.15,
                    ease: 'power2.out',
                });
            }, 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return { headerRef };
};

export default useButtonPopupAnimation;
