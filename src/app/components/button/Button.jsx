import React from 'react';

const Button = ({ label }) => {
    return (
        <>
            <button className='btn green1 font-btn font-proxima'>{label}</button>
        </>
    );
};

export const ButtonWhite = ({ label }) => {
    return (
        <>
            <button className='btn white1 font-btn !font-normal font-proxima-normal'>{label}</button>
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

export default Button;
