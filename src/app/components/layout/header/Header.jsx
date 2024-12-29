import Link from 'next/link';
import React from 'react';
import { ButtonWhite } from '../../button/Button';
import { HeaderLogo } from '../../logo/Logo';
import { ArrowUpRight, Asterisk, BookOpen, ChevronDown, MessageSquareText, Pencil, Send, Zap } from 'lucide-react';

const Header = () => {
    return (
        <>
            <header className='fixed top-0 z-50 h-24'>
                <div className='header-inner'>
                    <div className='header-center'>
                        <Link href='/'>
                            <HeaderLogo />
                            <span className='sr-only'>PRETCOORD</span>
                        </Link>
                    </div>
                    <div className='header-left'>
                        <nav>
                            <ul className='flex gap-4'>
                                <li className='menu-item relative py-3'>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Product</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col'>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center leading-10 group'
                                                >
                                                    <Asterisk
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>
                                                        Feature
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center whitespace-nowrap leading-10 group'
                                                >
                                                    <Zap size={17} className='color-g50 group-hover:text-[#2aea65]' />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>
                                                        What' s New?
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='menu-item relative py-3'>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Learn</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col'>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center leading-10 group'
                                                >
                                                    <Pencil
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>
                                                        Tutorial
                                                    </span>
                                                    <ArrowUpRight
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center leading-10 group'
                                                >
                                                    <BookOpen
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>Manual</span>
                                                    <ArrowUpRight
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='menu-item relative py-3'>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Support</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col'>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center leading-10 group'
                                                >
                                                    <MessageSquareText
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>FAQ</span>
                                                    <ArrowUpRight
                                                        size={17}
                                                        className='color-g50 group-hover:text-[#2aea65]'
                                                    />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href='/'
                                                    className='flex gap-2 px-5 items-center text-center whitespace-nowrap leading-10 group'
                                                >
                                                    <Send size={17} className='color-g50 group-hover:text-[#2aea65]' />
                                                    <span className='color-g50 group-hover:text-[#2aea65]'>
                                                        Contact Us
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='menu-item relative py-3'>
                                    <Link href='/' className='flex items-center gap-1'>
                                        <span className='hover-line'>Collection</span>
                                        <ArrowUpRight color='white' size={20} />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header-right'>
                        <ButtonWhite label='DOWNLOAD' />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
