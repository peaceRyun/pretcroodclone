// components/SlideSection.js
import { useSlideAnimation } from '@/app/hooks/useGsapAnimation';
import Image from 'next/image';
import React from 'react';

const SlideSection = () => {
    return (
        <>
            <section className='flex flex-col gap-20 px-5'>
                <div className='title-area flex'>
                    <p className='font-proxima font-display3-h2 text-white uppercase mx-auto'>how it works</p>
                </div>
                <div className='img-slide-wrap'>
                    <ul className='img-slides flex gap-5'>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <li key={num}>
                                <div className='relative w-full aspect-[5/7]'>
                                    <Image
                                        src={`/images/pattern/home/slidesection/card_image_${num}.png`}
                                        alt={`card${num}`}
                                        fill
                                        className='w-[500px] h-[700px] object-cover'
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default SlideSection;
