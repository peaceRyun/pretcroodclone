import { useFooterLogoAnimation } from '@/app/hooks/useGsapAnimation';
import React from 'react';

const FooterLogo = () => {
    const { logoRef } = useFooterLogoAnimation();

    return (
        <div ref={logoRef}>
            <svg viewBox='0 0 1619 188' xmlns='http://www.w3.org/2000/svg' className='svg-big-logo'>
                <path
                    d='M-0.000839233 184.733V2.99707H91.2795C132.275 2.99707 154.692 30.5097 154.692 63.4909C154.692 96.4722 132.275 123.155 91.2795 123.155H47.0064V184.733H-0.000839233ZM84.996 42.5136H47.0064V83.3846H84.996C97.563 83.3846 106.852 75.4779 106.852 63.22C106.852 50.9621 97.563 42.5136 84.996 42.5136Z'
                    className='logo-p'
                />
                <path
                    d='M274.673 184.733L244.07 123.155H220.023V184.733H173.016V2.99707H264.296C304.749 2.99707 327.709 29.697 327.709 63.491C327.709 95.1008 308.298 111.998 291.366 117.991L328.541 184.75H274.707L274.673 184.733ZM257.181 42.5136H220.006V83.3847H257.181C269.476 83.3847 279.869 75.478 279.869 62.9492C279.869 50.4203 269.476 42.5136 257.181 42.5136Z'
                    className='logo-r'
                />
                <path
                    d='M350.943 184.733V2.99707H484.577V42.4967H397.95V72.7351H482.675V112.523H397.95V145.216H484.577V184.716H350.943V184.733Z'
                    className='logo-e'
                />
                <path
                    d='M554.714 184.733V43.8681H503.614V2.99707H652.567V43.8681H601.739V184.733H554.731H554.714Z'
                    className='logo-t'
                />
                <path
                    d='M656.948 94C656.948 37.8743 699.574 0 754.241 0C799.601 0 823.105 24.7867 835.128 48.7777L794.676 67.8419C788.664 53.3999 773.091 41.4128 754.224 41.4128C725.795 41.4128 704.754 64.3033 704.754 94C704.754 123.697 725.795 146.587 754.224 146.587C773.074 146.587 788.664 134.6 794.676 120.158L835.128 139.222C823.376 162.655 799.601 188 754.241 188C699.574 188 656.948 149.855 656.948 94Z'
                    className='logo-c'
                />
                <path
                    d='M940.91 0C996.663 0 1038.2 38.687 1038.2 94C1038.2 149.313 996.663 188 940.91 188C885.156 188 843.346 149.313 843.346 94C843.346 38.687 885.156 0 940.91 0ZM940.91 41.4128C910.579 41.4128 891.168 64.3033 891.168 94C891.168 123.697 910.579 146.587 940.91 146.587C971.24 146.587 990.379 123.426 990.379 94C990.379 64.5742 970.969 41.4128 940.91 41.4128Z'
                    className='logo-o'
                />
                <path
                    d='M1147.54 0C1203.29 0 1244.83 38.687 1244.83 94C1244.83 149.313 1203.29 188 1147.54 188C1091.79 188 1049.98 149.313 1049.98 94C1049.98 38.687 1091.79 0 1147.54 0ZM1147.54 41.4128C1117.21 41.4128 1097.8 64.3033 1097.8 94C1097.8 123.697 1117.21 146.587 1147.54 146.587C1177.87 146.587 1197.01 123.426 1197.01 94C1197.01 64.5742 1177.6 41.4128 1147.54 41.4128Z'
                    className='logo-o2'
                />
                <path
                    d='M1367.56 184.733L1336.96 123.155H1312.91V184.733H1265.9V2.99707H1357.18C1397.64 2.99707 1420.6 29.697 1420.6 63.491C1420.6 95.1008 1401.19 111.998 1384.25 117.991L1421.43 184.75H1367.59L1367.56 184.733ZM1350.07 42.5136H1312.89V83.3847H1350.07C1362.36 83.3847 1372.76 75.478 1372.76 62.9492C1372.76 50.4203 1362.36 42.5136 1350.07 42.5136Z'
                    className='logo-r2'
                />
                <path
                    d='M1443.83 184.733V2.99707H1520.35C1577.74 2.99707 1619 37.3328 1619 93.7294C1619 150.126 1577.74 184.733 1520.63 184.733H1443.83ZM1490.84 143.862H1520.35C1552.33 143.862 1570.91 120.7 1570.91 93.7294C1570.91 66.7586 1553.96 43.8681 1520.63 43.8681H1490.84V143.862Z'
                    className='logo-d'
                />
            </svg>
        </div>
    );
};

export const HeaderLogo = () => {
    return (
        <>
            <svg viewBox='0 0 242 24' className='header-logo'>
                <path
                    d='M34.8895 23.5828V0.382559H46.5516C51.7892 0.382559 54.6532 3.8948 54.6532 8.10517C54.6532 12.3155 51.7892 15.7219 46.5516 15.7219H40.8952V23.5828H34.8895ZM45.7488 5.42722H40.8952V10.6448H45.7488C47.3543 10.6448 48.5412 9.63543 48.5412 8.07059C48.5412 6.50575 47.3543 5.42722 45.7488 5.42722Z'
                    className='fill-f4'
                    id='enter-logo-1'
                ></path>
                <path
                    d='M69.9821 23.5828L66.0723 15.7219H63V23.5828H56.9943V0.382559H68.6564C73.8246 0.382559 76.758 3.79106 76.758 8.10518C76.758 12.1405 74.2781 14.2975 72.1149 15.0627L76.8643 23.585H69.9864L69.9821 23.5828ZM67.7473 5.42723H62.9978V10.6448H67.7473C69.3182 10.6448 70.646 9.63544 70.646 8.03601C70.646 6.43659 69.3182 5.42723 67.7473 5.42723Z'
                    className='fill-f4'
                    id='enter-logo-2'
                ></path>
                <path
                    d='M79.7264 23.5828V0.382565H96.7997V5.42507H85.7321V9.28529H96.5567V14.3645H85.7321V18.5382H96.7997V23.5807H79.7264V23.5828Z'
                    className='fill-f4'
                    id='enter-logo-3'
                ></path>
                <path
                    d='M105.76 23.5828V5.60014H99.2319V0.382565H118.262V5.60014H111.768V23.5828H105.76Z'
                    className='fill-f4'
                    id='enter-logo-4'
                ></path>
                <path
                    d='M118.822 12C118.822 4.83501 124.268 0 131.252 0C137.047 0 140.05 3.16426 141.586 6.22694L136.418 8.66066C135.65 6.817 133.661 5.28674 131.25 5.28674C127.618 5.28674 124.93 8.20893 124.93 12C124.93 15.7911 127.618 18.7132 131.25 18.7132C133.658 18.7132 135.65 17.183 136.418 15.3393L141.586 17.773C140.085 20.7644 137.047 24 131.252 24C124.268 24 118.822 19.1304 118.822 12Z'
                    id='enter-logo-5'
                    className='fill-f4'
                ></path>
                <path
                    d='M155.101 0C162.224 0 167.531 4.93876 167.531 12C167.531 19.0612 162.224 24 155.101 24C147.978 24 142.636 19.0612 142.636 12C142.636 4.93876 147.978 0 155.101 0ZM155.101 5.28674C151.226 5.28674 148.746 8.20893 148.746 12C148.746 15.7911 151.226 18.7132 155.101 18.7132C158.976 18.7132 161.422 15.7565 161.422 12C161.422 8.24351 158.942 5.28674 155.101 5.28674Z'
                    className='fill-f4'
                    id='enter-logo-6'
                ></path>
                <path
                    d='M181.5 1.2887e-05C188.624 1.2887e-05 193.931 4.93877 193.931 12C193.931 19.0612 188.624 24 181.5 24C174.377 24 169.036 19.0612 169.036 12C169.036 4.93877 174.377 1.2887e-05 181.5 1.2887e-05ZM181.5 5.28675C177.625 5.28675 175.145 8.20894 175.145 12C175.145 15.7911 177.625 18.7133 181.5 18.7133C185.376 18.7133 187.821 15.7565 187.821 12C187.821 8.24352 185.341 5.28675 181.5 5.28675Z'
                    className='fill-f4'
                    id='enter-logo-7'
                ></path>
                <path
                    d='M209.611 23.5829L205.701 15.7219H202.629V23.5829H196.623V0.382578H208.285C213.453 0.382578 216.387 3.79108 216.387 8.1052C216.387 12.1405 213.907 14.2976 211.743 15.0627L216.493 23.585H209.615L209.611 23.5829ZM207.376 5.42725H202.626V10.6448H207.376C208.947 10.6448 210.275 9.63546 210.275 8.03603C210.275 6.43661 208.947 5.42725 207.376 5.42725Z'
                    className='fill-f4'
                    id='enter-logo-8'
                ></path>
                <path
                    d='M219.355 23.5828V0.382578H229.132C236.463 0.382578 241.735 4.76586 241.735 11.9654C241.735 19.165 236.463 23.5828 229.166 23.5828H219.355ZM225.361 18.3653H229.132C233.217 18.3653 235.591 15.4085 235.591 11.9654C235.591 8.52234 233.426 5.60015 229.166 5.60015H225.361V18.3653Z'
                    className='fill-f4'
                    id='enter-logo-9'
                ></path>
            </svg>
        </>
    );
};

export const IntroLogo = () => {
    return (
        <>
            <svg viewBox='0 0 242 24' className='intro-logo'>
                <path
                    d='M34.8895 23.5828V0.382559H46.5516C51.7892 0.382559 54.6532 3.8948 54.6532 8.10517C54.6532 12.3155 51.7892 15.7219 46.5516 15.7219H40.8952V23.5828H34.8895ZM45.7488 5.42722H40.8952V10.6448H45.7488C47.3543 10.6448 48.5412 9.63543 48.5412 8.07059C48.5412 6.50575 47.3543 5.42722 45.7488 5.42722Z'
                    id='intro-logo-p'
                ></path>
                <path
                    d='M69.9821 23.5828L66.0723 15.7219H63V23.5828H56.9943V0.382559H68.6564C73.8246 0.382559 76.758 3.79106 76.758 8.10518C76.758 12.1405 74.2781 14.2975 72.1149 15.0627L76.8643 23.585H69.9864L69.9821 23.5828ZM67.7473 5.42723H62.9978V10.6448H67.7473C69.3182 10.6448 70.646 9.63544 70.646 8.03601C70.646 6.43659 69.3182 5.42723 67.7473 5.42723Z'
                    id='intro-logo-r'
                ></path>
                <path
                    d='M79.7264 23.5828V0.382565H96.7997V5.42507H85.7321V9.28529H96.5567V14.3645H85.7321V18.5382H96.7997V23.5807H79.7264V23.5828Z'
                    id='intro-logo-e'
                ></path>
                <path
                    d='M105.76 23.5828V5.60014H99.2319V0.382565H118.262V5.60014H111.768V23.5828H105.76Z'
                    id='intro-logo-t'
                ></path>
                <path
                    d='M118.822 12C118.822 4.83501 124.268 0 131.252 0C137.047 0 140.05 3.16426 141.586 6.22694L136.418 8.66066C135.65 6.817 133.661 5.28674 131.25 5.28674C127.618 5.28674 124.93 8.20893 124.93 12C124.93 15.7911 127.618 18.7132 131.25 18.7132C133.658 18.7132 135.65 17.183 136.418 15.3393L141.586 17.773C140.085 20.7644 137.047 24 131.252 24C124.268 24 118.822 19.1304 118.822 12Z'
                    id='intro-logo-c'
                ></path>
                <path
                    d='M155.101 0C162.224 0 167.531 4.93876 167.531 12C167.531 19.0612 162.224 24 155.101 24C147.978 24 142.636 19.0612 142.636 12C142.636 4.93876 147.978 0 155.101 0ZM155.101 5.28674C151.226 5.28674 148.746 8.20893 148.746 12C148.746 15.7911 151.226 18.7132 155.101 18.7132C158.976 18.7132 161.422 15.7565 161.422 12C161.422 8.24351 158.942 5.28674 155.101 5.28674Z'
                    id='intro-logo-o'
                ></path>
                <path
                    d='M181.5 1.2887e-05C188.624 1.2887e-05 193.931 4.93877 193.931 12C193.931 19.0612 188.624 24 181.5 24C174.377 24 169.036 19.0612 169.036 12C169.036 4.93877 174.377 1.2887e-05 181.5 1.2887e-05ZM181.5 5.28675C177.625 5.28675 175.145 8.20894 175.145 12C175.145 15.7911 177.625 18.7133 181.5 18.7133C185.376 18.7133 187.821 15.7565 187.821 12C187.821 8.24352 185.341 5.28675 181.5 5.28675Z'
                    id='intro-logo-o2'
                ></path>
                <path
                    d='M209.611 23.5829L205.701 15.7219H202.629V23.5829H196.623V0.382578H208.285C213.453 0.382578 216.387 3.79108 216.387 8.1052C216.387 12.1405 213.907 14.2976 211.743 15.0627L216.493 23.585H209.615L209.611 23.5829ZM207.376 5.42725H202.626V10.6448H207.376C208.947 10.6448 210.275 9.63546 210.275 8.03603C210.275 6.43661 208.947 5.42725 207.376 5.42725Z'
                    id='intro-logo-r2'
                ></path>
                <path
                    d='M219.355 23.5828V0.382578H229.132C236.463 0.382578 241.735 4.76586 241.735 11.9654C241.735 19.165 236.463 23.5828 229.166 23.5828H219.355ZM225.361 18.3653H229.132C233.217 18.3653 235.591 15.4085 235.591 11.9654C235.591 8.52234 233.426 5.60015 229.166 5.60015H225.361V18.3653Z'
                    id='intro-logo-d'
                ></path>
            </svg>
        </>
    );
};

export default FooterLogo;
