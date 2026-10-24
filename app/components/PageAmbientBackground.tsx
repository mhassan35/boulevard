'use client';

import { useEffect, useRef } from 'react';

export default function PageAmbientBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background || !window.matchMedia('(pointer: fine)').matches) return;

    let frame = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.45;

    const update = () => {
      frame = 0;
      background.style.setProperty('--page-glow-x', `${x}px`);
      background.style.setProperty('--page-glow-y', `${y}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={backgroundRef} className="page-ambient-background" aria-hidden="true" />;
}
