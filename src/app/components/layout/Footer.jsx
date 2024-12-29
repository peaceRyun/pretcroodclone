import React from 'react';
import { ButtonBlack } from '../button/Button';
import Link from 'next/link';
import { DiscordIconS, EmailIconS, InstagramIcon, NotionIcon } from '../icons/Icons';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import FooterLogo from '../logo/Logo';

const Footer = () => {
    return (
        <>
            <footer className='relative pt-[180px] px-[20px] pb-[120px] bgc-p transition-all'>
                <FooterLogo />
                <div className='mt-8 flex flex-col gap-8 font-proxima-normal lg:flex-row lg:justify-between'>
                    <Link href='#'>
                        <ButtonBlack label='Start for Free' type='fit1' />
                    </Link>
                    <div className='flex flex-col gap-8 w-[244px] md:w-fit lg:mt-6 lg:pr-14 lg:gap-14'>
                        <div className='footer-menu flex gap-7 flex-wrap gap text-sm'>
                            <Link href='/'>
                                <p className='hover-line black'>Privacy Policy</p>
                            </Link>
                            <p>·</p>
                            <Link href='/'>
                                <p className='hover-line black'>Terms of Use</p>
                            </Link>
                        </div>
                        <div className='sitemap flex flex-col'>
                            <ul className='flex gap-x-5 gap-y-10 flex-wrap w-[234px] md:w-fit'>
                                <li className='flex flex-col gap-4 w-[90px]'>
                                    <span className='text-xs c-o-40'>Product</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>
                                            <Link href='/' className='hover-line black'>
                                                Feature
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='hover-line black'>
                                                What's New?
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4 w-[90px]'>
                                    <span className='text-xs c-o-40'>Learn</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>
                                            <Link href='#' className='flex gap-1 '>
                                                <span className='hover-line black'>Tutorial</span>
                                                <ArrowUpRight size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='#' className='flex gap-1'>
                                                <span className='hover-line black'>Manual</span>
                                                <ArrowUpRight size={20} />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4 w-[90px]'>
                                    <span className='text-xs c-o-40'>Support</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>
                                            <Link href='#' className='flex gap-1'>
                                                <span className='hover-line black'>FAQ</span> <ArrowUpRight size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='hover-line black'>
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='flex flex-col gap-4 w-[90px]'>
                                    <span className='text-xs c-o-40'>&nbsp;</span>
                                    <ul className='flex flex-col gap-3 text-sm'>
                                        <li>
                                            <Link href='#' className='flex gap-1'>
                                                <span className='hover-line black'>Collection</span>
                                                <ArrowUpRight size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='/' className='hover-line black'>
                                                Download
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='sns-links flex gap-5 justify-center lg:justify-start lg:gap-10'>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_youtube.svg'
                                    width={24}
                                    height={24}
                                    alt='youtube'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_youtube_w.svg'
                                    width={24}
                                    height={24}
                                    alt='youtube'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_insta.svg'
                                    width={24}
                                    height={24}
                                    alt='insta'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_insta_w.svg'
                                    width={24}
                                    height={24}
                                    alt='insta'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_linkedin.svg'
                                    width={24}
                                    height={24}
                                    alt='linkedin'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_linkedin_w.svg'
                                    width={24}
                                    height={24}
                                    alt='linkedin'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_notion.svg'
                                    width={24}
                                    height={24}
                                    alt='notion'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_notion_w.svg'
                                    width={24}
                                    height={24}
                                    alt='notion'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_discord_s.svg'
                                    width={24}
                                    height={24}
                                    alt='discord_s'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_discord_s_w.svg'
                                    width={24}
                                    height={24}
                                    alt='discord_s'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                            <Link href='/' className='group'>
                                <Image
                                    src='/images/component/ico_email_s.svg'
                                    width={24}
                                    height={24}
                                    alt='email_s'
                                    className='group-hover:hidden transition-opacity duration-3000 opacity-100 group-hover:opacity-0'
                                />
                                <Image
                                    src='/images/component/ico_email_s_w.svg'
                                    width={24}
                                    height={24}
                                    alt='email_s'
                                    className='hidden group-hover:block transition-opacity duration-3000 opacity-0 group-hover:opacity-100'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='font-proxima-normal copyright fs-16-14 lg:text-left lg:-mt-[28px]'>
                    © 2023-2024 GIANTSTEP All rights reserved.
                </p>
            </footer>
        </>
    );
};

export default Footer;
