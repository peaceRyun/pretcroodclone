import Image from 'next/image';
import React from 'react';

const HelpSection = () => {
    return (
        <>
            <section>
                <marquee behavior='scroll' direction='left'>
                    <div className='flex gap-4'>
                        <span className='font-proxima fs-160-80 text-white font-bold'>NEED MORE HELP?</span>
                        <Image src='/images/component/logo_only.svg' width={63} height={60} alt='로고 이미지 ' />
                    </div>
                </marquee>
            </section>
        </>
    );
};

export default HelpSection;
