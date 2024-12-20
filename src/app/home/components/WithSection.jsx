// WithSection.jsx
import MiniCard from '@/app/components/card/Card';
import { WITH_SECTION_DATA } from '@/app/data/texts';
import React, { useState } from 'react';

const WithSection = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <div className='flex flex-col gap-20 py-24 px-3'>
            <h2 className='mx-auto uppercase font-proxima text-white font-mobile-display2'>
                <strong>do it with us</strong>
            </h2>
            <ul className='flex flex-col gap-3'>
                {WITH_SECTION_DATA.map((item) => (
                    <li key={item.id}>
                        <MiniCard
                            subtitle={item.subtitle}
                            p={item.p}
                            isActive={activeId === item.id}
                            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WithSection;
