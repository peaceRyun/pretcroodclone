import DiscordIcon, { EmailIcon } from '@/app/components/icons/Icons';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HelpSection = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <section className='pb-[18.75vw]'>
                <marquee behavior='scroll' direction='left' scrollamount='10'>
                    <div className='flex gap-4'>
                        {numbers.map((number) => (
                            <div key={number} className='flex gap-4 mx-8'>
                                <span className='font-proxima fs-160-80 text-white font-bold'>NEED MORE HELP?</span>
                                <Image
                                    src='/images/component/logo_only.svg'
                                    width={63}
                                    height={60}
                                    alt='로고 이미지'
                                    className='w-16 h-16 my-auto mx-10'
                                />
                            </div>
                        ))}
                    </div>
                </marquee>
                <div className='contact-wrap flex flex-col gap-10 px-5 justify-center mt-[80px] md:flex-row'>
                    <div className='discord flex flex-col gap-2 p-5 items-center contact-radius bgc-g90'>
                        <DiscordIcon className='text-white' />
                        <h3 className='font-proxima text-white text-center font-bold fs-40-28'>Discord</h3>
                        <p className='font-proxima-normal text-gray-50 fs-20-16 text-center'>
                            Quickly resolve your questions and share feature requests on Discord.
                        </p>
                        <Link href='#' className='flex gap-2 mt-[50px]'>
                            <strong className='font-proxima-normal text-gray-10 fs-20-14 text-center hover-line'>
                                Get Invited
                            </strong>
                            <ArrowRight color='gray' />
                        </Link>
                    </div>
                    <div className='email flex flex-col gap-2 p-5 items-center bgc-g10 rounded-2xl'>
                        <EmailIcon />
                        <h3 className='font-proxima text-center font-bold fs-40-28 text-gray-90'>help@pretcoord.com</h3>
                        <p className='font-proxima-normal text-gray-50 fs-20-16 text-center'>
                            Get a demo or advice to integrate garment tech into your process.
                        </p>
                        <Link href='#' className='flex gap-2 mt-[50px]'>
                            <strong className='font-proxima-normal text-gray-90 fs-20-14 text-center hover-line black'>
                                Contact Us
                            </strong>
                            <ArrowRight color='black' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HelpSection;
