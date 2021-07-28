import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap/gsap-core';

const getGaspWithScrollbarListener = (scrollbar) => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(scrollbar, {
        scrollTop(value) {
            if (arguments.length) {
                scrollbar.scrollTop = value; // setter
            }
            return scrollbar.scrollTop;    // getter
        }
    });
    scrollbar.addListener(ScrollTrigger.update);

    return gsap;
}

export default getGaspWithScrollbarListener;