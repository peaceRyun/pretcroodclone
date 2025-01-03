import { useButtonPopupAnimation } from '@/app/hooks/useGsapAnimation';
import { ChevronUp } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const Button = ({ label }) => {
    return (
        <>
            <button className='btn green1 font-btn font-proxima'>{label}</button>
        </>
    );
};

export const ButtonWhite = ({ label, className }) => {
    return (
        <>
            <button className={`btn white1 font-btn !font-normal font-proxima-normal ${className}`}>{label}</button>
        </>
    );
};

export const ButtonBlack = ({ label, type }) => {
    return (
        <>
            <button className={`btn black1 ${type} font-btn !font-normal font-proxima-normal`}>{label}</button>
        </>
    );
};

export const ButtonPopup = () => {
    const { textRef, iconRef, handleHoverAnimation } = useButtonPopupAnimation();

    return (
        <button
            className='fixed bottom-10 right-5 p-0 m-0 flex justify-center items-center bg-gray-90 rounded-xl w-14 h-14 overflow-hidden hover:cursor-pointer'
            onMouseEnter={() => handleHoverAnimation(true)}
            onMouseLeave={() => handleHoverAnimation(false)}
        >
            <div className='absolute' ref={iconRef}>
                <ChevronUp color='#2aea65' size={28} />
            </div>
            <div className='absolute text-primary opacity-0 translate-y-10' ref={textRef}>
                TOP
            </div>
        </button>
    );
};

export default ButtonPopup;
