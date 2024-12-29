'use client';
import React, { useEffect } from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/main';
import Button from '../components/button/Button';
import Image from 'next/image';
import TalkSection from './components/TalkSection';
import { useHomeAnimation } from '../hooks/useGsapAnimation';
import WithSection from './components/WithSection';
import SlideSection from './components/SlideSection';
import PlanSection from './components/PlanSection';
import HelpSection from './components/HelpSection';

const Home = () => {
    const { pinRef, section1Ref, section2Ref, mediaContainerRef } = useHomeAnimation();
    useEffect(() => {
        // 페이지 진입시 smooth scroll 설정
        document.documentElement.style.scrollBehavior = 'smooth';

        // 페이지 이탈시 기본값으로 복원
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
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
                            <p className='font-proxima font-display1'>Set the trend</p>
                            <p className='font-proxima font-display1'>in digital fashion</p>
                        </div>
                        <Button label='Start for Free' />
                    </section>
                    <section ref={section2Ref} className='sec2 w-full h-screen absolute top-0 z-10 overflow-hidden'>
                        <div
                            ref={mediaContainerRef}
                            className='rounded-2xl overflow-hidden w-full mx-auto aspect-video fullHeight scale-90'
                        >
                            <video autoPlay muted loop playsInline className='w-[1920px] h-[1080px] object-cover'>
                                <source src='/images/pattern/home/intro-demo-v.mp4' type='video/mp4' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>
                </div>
                <TalkSection />
                <WithSection />
                <SlideSection />
                <PlanSection />
                <HelpSection />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
