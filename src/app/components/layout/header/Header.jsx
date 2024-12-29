import Link from 'next/link';
import React from 'react';
import { ButtonWhite } from '../../button/Button';
import { HeaderLogo } from '../../logo/Logo';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

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
                                <li>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Product</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col gap-4'>
                                            <li>
                                                <Link href='/'>
                                                    <span>Feature</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/'>
                                                    <span>What' s New?</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Learn</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col gap-4'>
                                            <li>
                                                <Link href='/'>
                                                    <span>Tutorial</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/'>
                                                    <span>Manual</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link href='/' className='flex items-center gap-1 group'>
                                        <span>Support</span>
                                        <ChevronDown color='white' size={20} className='chevron-rotate' />
                                    </Link>
                                    <div className='floating-menu bgc-o-90'>
                                        <ul className='flex flex-col gap-4'>
                                            <li>
                                                <Link href='/'>
                                                    <span>FAQ</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href='/'>
                                                    <span>Contact Us</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
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
