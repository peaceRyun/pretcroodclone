import Image from 'next/image';
import React from 'react';

const TestSection = () => {
    return (
        <>
            <div className='my-[80px] mx-auto py-[500px] relative'>
                <div className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight sticky top-0'>
                    <Image
                        src='/images/pattern/home/testsection1.jpg'
                        alt='#'
                        width={2000}
                        height={2000}
                        className='w-[1920px] h-[1080px] object-cover'
                    />
                </div>
            </div>
        </>
    );
};

export default TestSection;
