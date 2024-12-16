'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
    const textRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        // 텍스트 애니메이션
        gsap.from(textRef.current, {
            x: -100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: textRef.current,
                start: 'top center',
                toggleActions: 'play none none reverse',
            },
        });

        // 박스 애니메이션
        gsap.from(boxRef.current, {
            scale: 0,
            rotation: 360,
            duration: 1,
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top center',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);
    return (
        <>
            <main className='min-h-[150vh]'>
                {/* 첫 번째 섹션 */}
                <section className='h-screen flex items-center justify-center'>
                    <h1 className='text-6xl'>스크롤을 내려보세요 👇</h1>
                </section>

                {/* 애니메이션 섹션 */}
                <section className='h-screen flex flex-col items-center justify-center gap-12'>
                    <h2 ref={textRef} className='text-4xl font-bold'>
                        왼쪽에서 등장하는 텍스트
                    </h2>

                    <div ref={boxRef} className='w-32 h-32 bg-blue-500 rounded-lg' />
                </section>
            </main>
            <h2 className='flex flex-col uppercase text-center'>
                <p className='font-proxima font-mobile-display1'>Set the trend</p>
                <p className='font-proxima font-mobile-display1'>in digital fashion</p>
            </h2>
        </>
    );
}
