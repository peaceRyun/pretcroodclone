import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata = {
    title: 'PRETCROOD CloneCoding',
    description: 'PRETCROOD 클론코딩 프로젝트입니다.',
    openGraph: {
        type: 'website',
        title: '페이지 제목',
        description: '페이지 설명',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        domain: '사이트 명',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='ko'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
