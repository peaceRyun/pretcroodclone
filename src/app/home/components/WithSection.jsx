// WithSection.jsx
import MiniCard from '@/app/components/card/Card';
import { WITH_SECTION_DATA } from '@/app/data/texts';
import React, { useEffect, useRef, useState } from 'react';

const WithSection = () => {
    const [activeId, setActiveId] = useState(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sectionRef.current && !sectionRef.current.contains(event.target)) {
                setActiveId(null); // 외부 클릭 시 모든 카드 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex flex-col gap-20 py-24 px-3'>
            <h2 className='mx-auto uppercase font-proxima text-white font-display2'>
                <strong>do it with us</strong>
            </h2>
            <ul ref={sectionRef} className='flex flex-col gap-3'>
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
