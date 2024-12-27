import React from 'react';
import { ButtonBlack } from '../button/Button';
import Link from 'next/link';
import { DiscordIconS, EmailIconS, InstagramIcon, NotionIcon } from '../icons/Icons';
import Image from 'next/image';

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
                        <div className='footer-menu flex gap-7 flex-wrap gap text-sm'>
                            <p>Privacy Policy</p>
                            <p>·</p>
                            <p>Terms of Use</p>
                        </div>
                        <div className='sitemap flex flex-col'>
                            <ul className='flex gap-4 flex-wrap'>
                                <li className='flex flex-col gap-4'>
                                    <span className='text-xs c-o-40'>Product</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>Feature</li>
                                        <li>What's New?</li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4'>
                                    <span className='text-xs c-o-40'>Learn</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>Tutorial</li>
                                        <li>Manual</li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4'>
                                    <span className='text-xs c-o-40'>Support</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>FAQ</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4'>
                                    <span>&nbsp;</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>Collection</li>
                                        <li>Download</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='sns-links flex gap-5'>
                            <Image src='/images/component/ico_youtube.svg' width={24} height={24} alt='youtube' />
                            <InstagramIcon />
                            <Image src='/images/component/ico_linkedin.svg' width={24} height={24} alt='linkedin' />
                            <Image src='/images/component/ico_notion.svg' width={24} height={24} alt='notion' />
                            <Image src='/images/component/ico_discord_s.svg' width={24} height={24} alt='discord_s' />
                            <Image src='/images/component/ico_email_s.svg' width={24} height={24} alt='email_s' />
                        </div>
                    </div>
                </div>
                <p className='font-proxima-normal copyright fs-16-14'>© 2023-2024 GIANTSTEP All rights reserved.</p>
            </footer>
        </>
    );
};

export default Footer;
