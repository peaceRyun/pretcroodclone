/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // 기본 색상
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                // Green 관련 색상
                primary: 'var(--Green__primary)',
                green: {
                    600: 'var(--Green__600)',
                    700: 'var(--Green__700)',
                    800: 'var(--Green__800)',
                    900: 'var(--Green__900)',
                },

                // Gray 관련 색상
                gray: {
                    10: 'var(--Gray__10)',
                    30: 'var(--Gray__30)',
                    50: 'var(--Gray__50)',
                    60: 'var(--Gray__60)',
                    70: 'var(--Gray__70)',
                    80: 'var(--Gray__80)',
                    90: 'var(--Gray__90)',
                },

                secondary: 'var(--secondary)',
            },
            height: {
                header: 'var(--hdHeight)',
            },
            spacing: {
                vh: 'var(--vh)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const responsiveFontSizes = {
                '.fs-170-24': {
                    'font-size': 'clamp(24px, 9.767vw, 170px)',
                },
                '.fs-160-80': {
                    'font-size': 'clamp(80px, 10.667vw, 160px)',
                },
                '.fs-160-60': {
                    'font-size': 'clamp(60px, 8vw, 160px)',
                },
                '.fs-120-60': {
                    'font-size': 'clamp(60px, 6.8vw, 120px)',
                },
                '.fs-116-56': {
                    'font-size': 'clamp(56px, 7.467vw, 116px)',
                },
                '.fs-100-40': {
                    'font-size': 'clamp(40px, 7vw, 100px)',
                },
                '.fs-82-40': {
                    'font-size': 'clamp(40px, 5.333vw, 68px)',
                },
                '.fs-80-60': {
                    'font-size': 'clamp(60px, 8vw, 80px)',
                },
                '.fs-72-28': {
                    'font-size': 'clamp(28px, 3.733vw, 72px)',
                },
                '.fs-68-36': {
                    'font-size': 'clamp(36px, 4.8vw, 68px)',
                },
                '.fs-68-32': {
                    'font-size': 'clamp(32px, 4.267vw, 68px)',
                },
                '.fs-56-36': {
                    'font-size': 'clamp(36px, 4.8vw, 56px)',
                },
                '.fs-56-28': {
                    'font-size': 'clamp(28px, 3.733vw, 56px)',
                },
                '.fs-56-24': {
                    'font-size': 'clamp(24px, 3.2vw, 56px)',
                },
                '.fs-48-28': {
                    'font-size': 'clamp(28px, 3.733vw, 48px)',
                },
                '.fs-44-28': {
                    'font-size': 'clamp(28px, 3.733vw, 44px)',
                },
                '.fs-44-32': {
                    'font-size': 'clamp(32px, 4.267vw, 44px)',
                },
                '.fs-44-24': {
                    'font-size': 'clamp(24px, 2.267vw, 44px)',
                },
                '.fs-40-28': {
                    'font-size': 'clamp(28px, 3.733vw, 40px)',
                },
                '.fs-32-24': {
                    'font-size': 'clamp(24px, 2.2vw, 32px)',
                },
                '.fs-32-16': {
                    'font-size': 'clamp(16px, 3.2vw, 32px)',
                },
                '.fs-28-16': {
                    'font-size': 'clamp(16px, 2.133vw, 28px)',
                },
                '.fs-24-20': {
                    'font-size': 'clamp(20px, 2.667vw, 24px)',
                },
                '.fs-24-18': {
                    'font-size': 'clamp(18px, 2.4vw, 24px)',
                },
                '.fs-24-16': {
                    'font-size': 'clamp(16px, 1.933vw, 24px)',
                },
                '.fs-20-18': {
                    'font-size': 'clamp(18px, 2.1vw, 20px)',
                },
                '.fs-20-16': {
                    'font-size': 'clamp(16px, 1.733vw, 20px)',
                },
                '.fs-20-14': {
                    'font-size': 'clamp(14px, 1.867vw, 20px)',
                },
                '.fs-18-16': {
                    'font-size': 'clamp(16px, 2.133vw, 18px)',
                },
                '.fs-18-14': {
                    'font-size': 'clamp(14px, 1.867vw, 18px)',
                },
                '.fs-16-14': {
                    'font-size': 'clamp(14px, 1.867vw, 16px)',
                },
                '.fs-14-13': {
                    'font-size': 'clamp(13px, 1.733vw, 14px)',
                },
                '.fs-13-12': {
                    'font-size': 'clamp(12px, 1.6vw, 13px)',
                },
            };
            const etcUtilies = {
                '.fullHeight': {
                    'min-height': 'calc(var(--vh, 1vh) * 100)',
                },
                '.fullHeight-h': {
                    'min-height': 'calc(var(--vh, 1vh) * 100 - 5rem)',
                },
                '.cont': {
                    width: 'clamp(15rem, 89vw, 92.5rem)',
                    height: '100%',
                    margin: '0 auto',
                },
                '.layout-plan': {
                    'max-width': '100rem',
                    margin: 'clamp(2.5rem, 8.127vw, 6.25rem) 0 0',
                },
                '.layout-plan-wrap': {
                    padding: 'clamp(5.625rem, 6.5vw, 7.5rem) 0',
                },
                '.bbc-g60': {
                    'border-bottom': '1px solid var(--Gray__60)',
                },
                '.contact-radius': {
                    'border-radius': 'clamp(0.125rem, 20vw, 13.75rem)',
                },
                '.contact-icon-size': {
                    width: 'clamp(3.75rem, 8vw, 6.25rem)',
                    height: 'clamp(3.75rem, 8vw, 6.25rem)',
                },
                '.intro-logo': {
                    width: 'clamp(200px, 26.667vw, 380px)',
                    fill: 'var(--Gray__10)',
                },
            };
            addUtilities(responsiveFontSizes);
            addUtilities(etcUtilies);
        },
    ],
    darkMode: 'class', // or 'media' if you want to use media queries
};
