import './styles/globals.scss';
import SkipNav from './components/layout/header/SkipNav';

export default function RootLayout({ children }) {
    return (
        <html lang='ko'>
            <head>
                <link rel='stylesheet' href='https://use.typekit.net/bdn8hmi.css' />
            </head>
            <body>
                <SkipNav />
                <div id='wrap' className='relative min-h-screen bg-gray-80 custom-cursor'>
                    {children}
                </div>
            </body>
        </html>
    );
}
