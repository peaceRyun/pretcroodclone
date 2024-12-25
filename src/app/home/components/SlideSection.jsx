// components/SlideSection.js
import { useSlideAnimation } from '@/app/hooks/useGsapAnimation';
import Image from 'next/image';
import React from 'react';

const SlideSection = () => {
    const { howItWorksRef, addToSlideRefs } = useSlideAnimation();

    return (
        <section>
            <div ref={howItWorksRef} className='how-it-works text-white'>
                <div className='flex '>
                    <h2 className='fixed top-0 pt-[15vh] mx-auto uppercase font-proxima text-white font-display3-h2 !font-bold text-center w-full '>
                        how it works
                    </h2>

                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/card_image_1.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[500px] h-[700px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/card_image_2.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[500px] h-[700px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/card_image_3.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[500px] h-[700px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/card_image_4.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[500px] h-[700px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                    <div ref={addToSlideRefs} className='step-slide'>
                        <Image
                            src='/images/pattern/home/slidesection/card_image_5.png'
                            alt='person3d'
                            width={1000}
                            height={1000}
                            className='w-[500px] h-[700px] absolute top-1/2 -translate-y-1/2'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SlideSection;
