'use client';

import { IntroLogo } from '@/app/components/logo/Logo';
import { useState, useEffect } from 'react';

const IntroSection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [slideOut, setSlideOut] = useState(false);

    useEffect(() => {
        // 텍스트 등장
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 100);

        // 텍스트 등장 후 로고 등장
        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 1100); // 텍스트 등장(100ms) + 텍스트 애니메이션(1000ms) 후

        // 퇴장 시작
        const exitTimer = setTimeout(() => {
            setSlideOut(true);
        }, 2100);

        // 컴포넌트 제거
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3400);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(logoTimer);
            clearTimeout(exitTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <section>
            <div className='w-full min-h-screen flex flex-col justify-between fs-68-32 bg-gray-90 text-gray-10 font-bold absolute z-50 py-20'>
                <div className='space-y-4'>
                    <p className='overflow-hidden h-[1.2em]'>
                        <span
                            className={`block transform transition-transform duration-1000 ease-in-out font-proxima
                                ${showText ? 'translate-y-0' : 'translate-y-full'}
                                ${slideOut ? '-translate-y-full' : ''}`}
                        >
                            HEY THERE,
                        </span>
                    </p>
                    <p className='overflow-hidden h-[1.2em]'>
                        <span
                            className={`block transform transition-transform duration-1000 ease-in-out font-proxima
                                ${showText ? 'translate-y-0' : 'translate-y-full'}
                                ${slideOut ? '-translate-y-full' : ''}`}
                        >
                            BE EXCEPTIONAL WITH
                        </span>
                    </p>
                </div>
                <div className='overflow-hidden'>
                    <div
                        className={`block transform transition-transform duration-1000 ease-in-out
                            ${showLogo ? 'translate-y-0' : 'translate-y-full'}
                            ${slideOut ? '-translate-y-full delay-[300ms]' : ''}`}
                    >
                        <IntroLogo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
