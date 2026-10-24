'use client';

import { useEffect } from 'react';

export default function SectionGradient() {
  useEffect(() => {
    const homePage = document.querySelector<HTMLElement>('.home-page');
    const hero = homePage?.querySelector<HTMLElement>('.modern-hero');
    if (!homePage || !hero || !window.matchMedia('(pointer: fine)').matches) return;

    let animationFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let pointerIsOverHero = false;

    const updatePointerPosition = () => {
      animationFrame = 0;
      homePage.style.setProperty('--home-pointer-x', `${pointerX}px`);
      homePage.style.setProperty('--home-pointer-y', `${pointerY}px`);
      homePage.style.setProperty('--home-pointer-opacity', pointerIsOverHero ? '0' : '1');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      const heroBounds = hero.getBoundingClientRect();
      pointerIsOverHero =
        pointerX >= heroBounds.left &&
        pointerX <= heroBounds.right &&
        pointerY >= heroBounds.top &&
        pointerY <= heroBounds.bottom;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updatePointerPosition);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="landing-gradient-backdrop" aria-hidden="true" />;
}