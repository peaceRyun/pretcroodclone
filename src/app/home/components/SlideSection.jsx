// components/SlideSection.js
import { useSlideAnimation } from '@/app/hooks/useGsapAnimation';
import Image from 'next/image';
import React from 'react';

const SlideSection = () => {
    const { howItWorksRef, addToSlideRefs } = useSlideAnimation();

    return (
        <section>
            <div ref={howItWorksRef} className='how-it-works text-white'>
                <div className='p-20 flex gap-20 relative'>
                    <h2 className='font-proxima uppercase text-white fixed top-0'>how it works</h2>
                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/person3d.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[200px] h-[200px]'
                        />
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        STEP 2
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        STEP 3
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideSection;
