import React from 'react';
import { ButtonBlack } from '../button/Button';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className='relative pt-[80px] pb-[60px] bgc-p'>
                <div className='px-5'>PRETCOORD</div>
                <div className='px-5 mt-8 flex flex-col gap-8 font-proxima-normal'>
                    <Link href='#'>
                        <ButtonBlack label='Start for Free' type='fit1' />
                    </Link>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-7 flex-wrap gap text-sm'>
                            <p>Privacy Policy</p>
                            <p>·</p>
                            <p>Terms of Use</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
