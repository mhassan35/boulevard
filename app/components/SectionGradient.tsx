'use client';

import { useEffect } from 'react';

export default function SectionGradient() {
  useEffect(() => {
    const homePage = document.querySelector<HTMLElement>('.home-page');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!homePage || !finePointer.matches) return;

    let animationFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const updatePointerPosition = () => {
      animationFrame = 0;
      homePage.style.setProperty('--home-pointer-x', `${pointerX}px`);
      homePage.style.setProperty('--home-pointer-y', `${pointerY}px`);
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updatePointerPosition);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      scheduleUpdate();
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });
    scheduleUpdate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="landing-gradient-backdrop" aria-hidden="true" />;
}
