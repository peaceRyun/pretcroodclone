import Link from 'next/link';
import React, { useState } from 'react';
import { ButtonWhite } from '../../button/Button';
import { HeaderLogo } from '../../logo/Logo';
import {
    ArrowUpRight,
    Asterisk,
    BookOpen,
    ChevronDown,
    Menu,
    MessageSquareText,
    Pencil,
    Send,
    X,
    Zap,
} from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

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
                    <div className='header-left '>
                        <nav>
                            <ul className='gap-4 hidden lg:flex'>
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
                            <ul className='gnb-tabletless flex flex-col p-6 gap-5 lg:hidden'>
                                <li></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='header-right'>
                        <button onClick={handleClick} className='!p-0 lg:hidden'>
                            {isOpen ? (
                                <X size={28} className='color-g10 relative z-50' />
                            ) : (
                                <Menu size={28} className='color-g10' />
                            )}
                        </button>
                        <ButtonWhite label='DOWNLOAD' className='hidden lg:block' />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
