import MiniCard from '@/app/components/card/Card';
import React from 'react';

const WithSection = () => {
    return (
        <>
            <div className='flex flex-col gap-20 py-24 px-3'>
                <h2 className='mx-auto uppercase font-proxima text-white font-mobile-display2'>
                    <strong>do it with us</strong>
                </h2>
                <ul className='flex flex-col gap-3'>
                    <MiniCard subtitle='BUILD TRUE MARKET' />
                    <MiniCard subtitle='EFFORTLESS CREATION' />
                    <MiniCard subtitle='DESIGN INTEGRITY ' />
                </ul>
            </div>
        </>
    );
};

export default WithSection;
