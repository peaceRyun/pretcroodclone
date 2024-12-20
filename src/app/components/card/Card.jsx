import React, { useState } from 'react';

const MiniCard = ({ subtitle, p }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li>
            <button
                className={`block rounded-3xl p-7 w-full text-left transition-all duration-300 ${
                    isActive ? 'bg-white text-black' : 'bg-[rgb(25,25,25)] text-white'
                }`}
                onClick={() => setIsActive(!isActive)}
            >
                <h3
                    className={`font-proxima font-display3 transition-all duration-300 ${
                        isActive ? 'text-2xl mb-4' : 'text-xl'
                    }`}
                >
                    {subtitle}
                </h3>
                {isActive && <p className='font-proxima text-base transition-all duration-300'>{p}</p>}
            </button>
        </li>
    );
};

export default MiniCard;
