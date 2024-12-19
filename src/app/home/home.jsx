import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
import Main, { Section } from '../components/layout/main';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import TalkSection from './components/TalkSection';
import TestSection from './components/TestSection';
import Button from '../components/button/Button';
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <div className=' relative'>
                    <section className='w-full h-[95vh] fullHeight-h flex flex-col items-center justify-center gap-[40px] fixed top-0 z-20'>
                        <div className='text-center text-white uppercase -tracking-wider'>
                            <p className='font-proxima font-mobile-display1 '>Set the trend</p>
                            <p className='font-proxima font-mobile-display1'>in digital fashion</p>
                        </div>
                        <Button label='Start for Free' />
                    </section>
                    <section className='my-[80px] mx-auto sticky top-0 z-10'>
                        <div className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight scale-90'>
                            <Image
                                src='/images/pattern/home/testsection1.jpg'
                                alt='#'
                                width={2000}
                                height={2000}
                                className='w-[1920px] h-[1080px] object-cover'
                            />
                        </div>
                    </section>
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
