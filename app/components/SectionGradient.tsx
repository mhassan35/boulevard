'use client';

import { useEffect } from 'react';

export default function SectionGradient() {
  useEffect(() => {
    const content = document.querySelector<HTMLElement>('.landing-content');
    const backdrop = content?.querySelector<HTMLElement>(
      '.landing-gradient-backdrop',
    );
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!content || !backdrop || !finePointer.matches) return;

    let animationFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const updateBackdrop = () => {
      animationFrame = 0;
      const contentTop = content.getBoundingClientRect().top;
      backdrop.style.setProperty('--landing-glow-x', `${pointerX}px`);
      backdrop.style.setProperty(
        '--landing-glow-y',
        `${pointerY - contentTop}px`,
      );
    };

    const scheduleUpdate = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateBackdrop);
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
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    scheduleUpdate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div className="landing-gradient-backdrop" aria-hidden="true" />;
}
