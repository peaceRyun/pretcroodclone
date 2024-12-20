import React from 'react';

const MiniCard = ({ subtitle, p, isActive, onClick }) => {
    return (
        <button
            className={`block rounded-3xl p-7 w-full text-left transition-all duration-300 ${
                isActive ? 'bg-white text-black' : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
            onClick={onClick}
        >
            <h3
                className={`font-proxima font-display3 transition-all duration-300 ${
                    isActive ? 'font-display3-onclick mb-3' : '!text-xl'
                }`}
            >
                {subtitle}
            </h3>
            <p
                className={`text-sm leading-4 transition-all duration-300
        ${isActive ? 'h-auto opacity-100 mt-4' : 'h-0 opacity-0 overflow-hidden'}`}
            >
                {p}
            </p>
        </button>
    );
};

export default MiniCard;
