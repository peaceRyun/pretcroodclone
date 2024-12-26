// hooks/gsapInit.js
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// 파일 최상단에서 한 번만 플러그인 등록
if (typeof window !== 'undefined') {
    // SSR 대비
    if (!gsap.plugins?.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }
}
