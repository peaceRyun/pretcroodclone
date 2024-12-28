import Link from 'next/link';
import React from 'react';
import { HeaderLogo } from '../../logo/Logo';

const Header = () => {
    return (
        <>
            <header className='fixed top-0 z-50'>
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
                                    <Link href='/'>
                                        <span>Product</span>
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
                                    <Link href='/'>
                                        <span>Learn</span>
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
                                    <Link href='/'>
                                        <span>Product</span>
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
                                    <Link href='/'>
                                        <span>Collection</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
