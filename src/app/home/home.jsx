'use client';
import React, { useEffect, useRef } from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/main';
import Button from '../components/button/Button';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import TalkSection from './components/TalkSection';

const Home = () => {
    const pinRef = useRef(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinRef.current,
                start: 'top top',
                end: '+=200%',
                pin: true,
                pinSpacing: true,
                scrub: 1.5,
                markers: true,
            },
        });

        timeline
            .fromTo(
                section2Ref.current,
                {
                    y: '75vh',
                },
                {
                    y: '0',
                    ease: 'none',
                    duration: 0.7,
                }
            )
            .to(imageContainerRef.current, {
                scale: 1.0,
                duration: 0.7,
                ease: 'power2.inOut',
            })
            .to(imageContainerRef.current, {
                scale: 1.2,
                duration: 30,
                ease: 'power1.inOut',
            });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <Header />
            <Main>
                <div className='pin relative h-[300vh] pb-1500px' ref={pinRef}>
                    <section
                        ref={section1Ref}
                        className='sec1 w-full h-screen flex flex-col items-center justify-center gap-[40px] fixed top-0 z-20'
                    >
                        <div className='text-center text-white uppercase -tracking-wider'>
                            <p className='font-proxima font-mobile-display1'>Set the trend</p>
                            <p className='font-proxima font-mobile-display1'>in digital fashion</p>
                        </div>
                        <Button label='Start for Free' />
                    </section>
                    <section ref={section2Ref} className='sec2 w-full h-screen fixed top-0 z-10'>
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
            </Main>
            <Footer />
        </>
    );
};

export default Home;
