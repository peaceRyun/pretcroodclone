'use client';
import React, { useEffect } from 'react';
import { useHomeAnimation } from '../hooks/useGsapAnimation';
import Header from '../components/layout/header/Header';
import Main from '../components/layout/main';
import Footer from '../components/layout/Footer';
import TalkSection from './components/TalkSection';
import WithSection from './components/WithSection';
import SlideSection from './components/SlideSection';
import PlanSection from './components/PlanSection';
import HelpSection from './components/HelpSection';
import VideoSection from './components/VideoSection';
import { ButtonPopup } from '../components/button/Button';

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
                <VideoSection
                    pinRef={pinRef}
                    section1Ref={section1Ref}
                    section2Ref={section2Ref}
                    mediaContainerRef={mediaContainerRef}
                />
                <TalkSection />
                <WithSection />
                <SlideSection />
                <PlanSection />
                <HelpSection />
            </Main>
            {/* 팝업 */}
            <ButtonPopup />
            <Footer />
        </>
    );
};

export default Home;
