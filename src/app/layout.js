'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    useEffect(() => {
        // GSAP 및 ScrollTrigger 등록
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <html lang='ko'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
