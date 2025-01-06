'use client';

import { IntroLogo } from '@/app/components/logo/Logo';
import { useState, useEffect } from 'react';

const IntroSection = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [hideText, setHideText] = useState(false);
    const [hideLogo, setHideLogo] = useState(false);

    // 스크롤 제어 함수들
    // Next.js의 'use client' 컴포넌트에서는 document 객체에 직접 접근하면 hydration 문제가 발생할 수 있습니다. 이를 해결하기 위해 useEffect 내에서 document 접근 전에 window 객체가 있는지 확인하고, 별도의 lock/unlock 함수를 만들어보겠습니다.
    const lockScroll = () => {
        if (typeof window !== 'undefined') {
            document.body.style.cssText = `
                overflow: hidden;
                position: fixed;
                top: -${window.scrollY}px;
                left: 0;
                right: 0;
            `;
        }
    };

    const unlockScroll = () => {
        if (typeof window !== 'undefined') {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }
    };

    useEffect(() => {
        lockScroll(); // 컴포넌트 마운트 시 스크롤 잠금

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
            unlockScroll(); // 컴포넌트 제거 시 스크롤 해제
        }, 4500);

        return () => {
            unlockScroll(); // cleanup 시 스크롤 해제
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
