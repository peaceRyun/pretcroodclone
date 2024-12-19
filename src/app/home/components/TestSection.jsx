import Image from 'next/image';
import React from 'react';

const TestSection = () => {
    return (
        <>
            <section className='my-[80px] mx-auto sticky top-0 z-10'>
                <div className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight scale-90'>
                    <Image
                        src='/images/pattern/home/testsection1.jpg'
                        alt='#'
                        width={2000}
                        height={2000}
                        className='w-[1920px] h-[1080px] object-cover'
                    />
                </div>
            </section>
        </>
    );
};

export default TestSection;
