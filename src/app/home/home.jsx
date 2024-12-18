import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/Footer';
import Main, { Section } from '../components/layout/main';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import TalkSection from './components/TalkSection';
import TestSection from './components/TestSection';

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <HeroSection />
                <TestSection />

                <Section>
                    <TalkSection />
                </Section>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
