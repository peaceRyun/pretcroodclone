'use client';
import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/main';
import Button from '../components/button/Button';
import Image from 'next/image';
import TalkSection from './components/TalkSection';
import { useHomeAnimation } from '../hooks/useGsapAnimation';
import WithSection from './components/WithSection';
import SlideSection from './components/SlideSection';

const Home = () => {
    const { pinRef, section1Ref, section2Ref, imageContainerRef } = useHomeAnimation();
    return (
        <>
            <Header />
            <Main>
                <div className='pin relative h-screen' ref={pinRef}>
                    <section
                        ref={section1Ref}
                        className='sec1 w-full h-screen flex flex-col items-center justify-center gap-[40px] relative z-20'
                    >
                        <div className='text-center text-white uppercase -tracking-wider'>
                            <p className='font-proxima font-mobile-display1'>Set the trend</p>
                            <p className='font-proxima font-mobile-display1'>in digital fashion</p>
                        </div>
                        <Button label='Start for Free' />
                    </section>
                    <section ref={section2Ref} className='sec2 w-full h-screen absolute top-0 z-10 overflow-hidden'>
                        <div
                            ref={imageContainerRef}
                            className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight scale-90'
                        >
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
                <TalkSection />
                <WithSection />
                <SlideSection />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
