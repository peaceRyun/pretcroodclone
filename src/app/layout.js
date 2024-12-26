import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.scss';
import SkipNav from './components/layout/header/SkipNav';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default function RootLayout({ children }) {
    return (
        <html lang='ko'>
            <head>
                <link rel='stylesheet' href='https://use.typekit.net/bdn8hmi.css' />
            </head>
            <body>
                <SkipNav />
                <div id='wrap' className='relative min-h-screen bgc-g80'>
                    {children}
                </div>
            </body>
        </html>
    );
}
