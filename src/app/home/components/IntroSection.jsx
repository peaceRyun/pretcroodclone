'use client';

import { IntroLogo } from '@/app/components/logo/Logo';
import { useState, useEffect } from 'react';

const IntroSection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [hideText, setHideText] = useState(false);
    const [hideLogo, setHideLogo] = useState(false);

    useEffect(() => {
        // 텍스트 등장
        const textTimer = setTimeout(() => {
            setShowText(true);
        }, 100);

        // 로고 등장
        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 1100);

        // 텍스트 퇴장
        const textExitTimer = setTimeout(() => {
            setHideText(true);
        }, 3000);

        // 로고 퇴장
        const logoExitTimer = setTimeout(() => {
            setHideLogo(true);
        }, 3300);

        // 컴포넌트 제거
        const removeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(logoTimer);
            clearTimeout(textExitTimer);
            clearTimeout(logoExitTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    const baseStyle = 'block transition-all duration-1000 ease-in-out font-proxima';

    // 텍스트 transform 스타일 생성
    const getTextStyle = (show, hide) => ({
        transform: hide ? 'translateY(-100%)' : !show ? 'translateY(100%)' : 'translateY(0)',
    });

    const sectionStyle = `
        w-full min-h-screen flex flex-col justify-between fs-68-32 
        bg-gray-90 text-gray-10 font-bold absolute z-50 py-20
        transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}
    `;

    return (
        <section className={sectionStyle}>
            <div className='space-y-4'>
                <p className='overflow-hidden h-[1.2em]'>
                    <span className={baseStyle} style={getTextStyle(showText, hideText)}>
                        HEY THERE,
                    </span>
                </p>
                <p className='overflow-hidden h-[1.2em]'>
                    <span className={baseStyle} style={getTextStyle(showText, hideText)}>
                        BE EXCEPTIONAL WITH
                    </span>
                </p>
            </div>
            <div className='overflow-hidden'>
                <div className={baseStyle} style={getTextStyle(showLogo, hideLogo)}>
                    <IntroLogo />
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
