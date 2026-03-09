import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let globalStarted = false;

declare global {
  interface Window {
    __mlabsLenis?: Lenis;
  }
}

export const initGlobalExperience = () => {
  if (globalStarted || typeof window === 'undefined') {
    return;
  }

  globalStarted = true;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    gestureOrientation: 'vertical',
    wheelMultiplier: 0.95,
    syncTouch: true,
    touchMultiplier: 1.2,
  });

  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  window.__mlabsLenis = lenis;

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
};
