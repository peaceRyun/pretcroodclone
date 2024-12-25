import React, { useState, useRef } from 'react';
import MiniCard from '@/app/components/card/Card';
import { WITH_SECTION_DATA } from '@/app/data/texts';

const WithSection = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const sectionRef = useRef(null);

    return (
        <div className='flex flex-col gap-20 py-24 px-3'>
            <h2 className='mx-auto uppercase font-proxima text-white font-display3-h2 !font-bold'>do it with us</h2>
            <ul ref={sectionRef} className='flex flex-col gap-3'>
                {WITH_SECTION_DATA.map((item) => (
                    <li key={item.id}>
                        <MiniCard
                            subtitle={item.subtitle}
                            p={item.p}
                            isActive={hoveredId === item.id}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WithSection;
