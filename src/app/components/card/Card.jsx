import React from 'react';

const MiniCard = ({ subtitle, p }) => {
    return (
        <>
            <li>
                <div className='rounded-3xl bg-[rgb(25_25_25)] p-[1.75rem] text-white font-proxima '>
                    <h3 className='font-display3'>{subtitle}</h3>
                    <p>{p}</p>
                </div>
            </li>
        </>
    );
};

export default MiniCard;
