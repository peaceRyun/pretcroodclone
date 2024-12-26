'use client';

import { useSlideAnimation } from '@/app/hooks/useGsapAnimation';
import Image from 'next/image';
import React from 'react';

const SlideSection = () => {
    const { sectionRef, slidesRef } = useSlideAnimation();

    return (
        <section ref={sectionRef} className='flex flex-col gap-20 px-5 min-h-screen'>
            <div className='title-area flex'>
                <p className='font-proxima font-display3-h2 text-white uppercase mx-auto py-10'>how it works</p>
            </div>
            <div className='img-slide-wrap overflow-hidden'>
                <ul ref={slidesRef} className='img-slides flex gap-5'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <li key={num} className='flex-shrink-0 w-96 md:w-[32rem]'>
                            <div className='relative aspect-[5/7]'>
                                <Image
                                    src={`/images/pattern/home/slidesection/card_image_${num}.png`}
                                    alt={`card${num}`}
                                    fill
                                    className='object-cover'
                                    priority={num === 1}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SlideSection;
