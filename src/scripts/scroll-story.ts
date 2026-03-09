import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

let storyStarted = false;

declare global {
  interface Window {
    __mlabsLenis?: {
      scrollTo: (target: string | Element, options?: { offset?: number; duration?: number }) => void;
    };
  }
}

const revealItems = () => {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 44, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
        delay: index * 0.018,
        scrollTrigger: {
          trigger: element,
          start: 'top 86%',
          once: true,
        },
      },
    );
  });
};

const splitHeroText = () => {
  const title = document.querySelector<HTMLElement>('[data-split]');

  if (!title) {
    return;
  }

  const split = new SplitType(title, {
    types: 'lines, words, chars',
    tagName: 'span',
  });

  gsap.from(split.chars, {
    yPercent: 118,
    opacity: 0,
    duration: 0.86,
    stagger: 0.011,
    ease: 'power4.out',
    delay: 0.16,
  });
};

const heroVisualEntrance = () => {
  const visual = document.querySelector<HTMLElement>('[data-hero-visual]');

  if (!visual) {
    return;
  }

  gsap.fromTo(
    visual,
    { opacity: 0, y: 38, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.05,
      ease: 'power3.out',
      delay: 0.22,
    },
  );
};

const floatHeroChips = () => {
  gsap.utils.toArray<HTMLElement>('[data-float-chip]').forEach((chip, index) => {
    gsap.to(chip, {
      y: index % 2 === 0 ? -7 : 7,
      duration: 2.5 + index * 0.3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
};

const sectionParallax = () => {
  gsap.utils.toArray<HTMLElement>('[data-section]').forEach((section) => {
    const layer = section.querySelector<HTMLElement>('[data-parallax]');

    if (!layer) {
      return;
    }

    gsap.to(layer, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.72,
      },
    });
  });
};

const cardHoverPulse = () => {
  gsap.utils.toArray<HTMLElement>('[data-card]').forEach((card) => {
    const glow = card.querySelector<HTMLElement>('.card-glow');

    if (!glow) {
      return;
    }

    card.addEventListener('pointerenter', () => {
      gsap.to(glow, { opacity: 0.66, duration: 0.3, ease: 'power2.out' });
    });

    card.addEventListener('pointerleave', () => {
      gsap.to(glow, { opacity: 0, duration: 0.34, ease: 'power2.out' });
    });
  });
};

const tiltPanels = () => {
  gsap.utils.toArray<HTMLElement>('[data-tilt]').forEach((panel) => {
    const move = (event: PointerEvent) => {
      const bounds = panel.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      gsap.to(panel, {
        rotateY: x * 7.5,
        rotateX: y * -7.5,
        transformPerspective: 1000,
        transformOrigin: 'center',
        duration: 0.34,
        ease: 'power2.out',
      });
    };

    panel.addEventListener('pointermove', move);
    panel.addEventListener('pointerleave', () => {
      gsap.to(panel, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.45,
        ease: 'power3.out',
      });
    });
  });
};

const headerAnimation = () => {
  const header = document.querySelector<HTMLElement>('[data-site-header]');

  if (!header) {
    return;
  }

  ScrollTrigger.create({
    start: 34,
    end: 'max',
    onUpdate: (self) => {
      header.classList.toggle('is-compact', self.scroll() > 34);
    },
  });
};

const trackActiveNav = () => {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));

  if (!links.length || !sections.length) {
    return;
  }

  const setActive = (id: string) => {
    links.forEach((link) => {
      link.classList.toggle('nav-link-active', link.dataset.navLink === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActive(visible[0].target.id);
      }
    },
    {
      threshold: [0.2, 0.35, 0.55],
      rootMargin: '-42% 0px -45% 0px',
    },
  );

  sections.forEach((section) => observer.observe(section));
};

const smoothAnchorLinks = () => {
  const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');

      if (!href || href.length < 2) {
        return;
      }

      const target = document.querySelector<HTMLElement>(href);

      if (!target) {
        return;
      }

      event.preventDefault();

      const lenis = window.__mlabsLenis;

      if (lenis) {
        lenis.scrollTo(target, { offset: -120, duration: 1.15 });
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

const animateAurora = () => {
  gsap.utils.toArray<HTMLElement>('.aurora-blob').forEach((blob, index) => {
    gsap.to(blob, {
      x: index % 2 === 0 ? 34 : -28,
      y: index % 2 === 0 ? -24 : 22,
      duration: 10 + index * 2.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
};

export const initScrollStory = () => {
  if (storyStarted || typeof window === 'undefined') {
    return;
  }

  storyStarted = true;

  gsap.registerPlugin(ScrollTrigger);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    });
    return;
  }

  splitHeroText();
  heroVisualEntrance();
  revealItems();
  sectionParallax();
  cardHoverPulse();
  tiltPanels();
  floatHeroChips();
  headerAnimation();
  trackActiveNav();
  smoothAnchorLinks();
  animateAurora();
};
