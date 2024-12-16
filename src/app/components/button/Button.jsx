import React from 'react';

const Button = ({ label }) => {
    return (
        <>
            <button className='btn lg py-[20px] px-[80px] rounded-[100px] font-btn font-proxima'>{label}</button>
        </>
    );
};

export default Button;
