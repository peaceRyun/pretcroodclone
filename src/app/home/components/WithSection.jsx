import MiniCard from '@/app/components/card/Card';
import { WITH_SECTION_DATA } from '@/app/data/texts';
import React from 'react';

const WithSection = () => {
    return (
        <>
            <div className='flex flex-col gap-20 py-24 px-3'>
                <h2 className='mx-auto uppercase font-proxima text-white font-mobile-display2'>
                    <strong>do it with us</strong>
                </h2>
                <ul className='flex flex-col gap-3'>
                    {WITH_SECTION_DATA.map((item) => (
                        <MiniCard key={item.id} subtitle={item.subtitle} p={item.p} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default WithSection;
