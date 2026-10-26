'use client';

import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const updatePosition = () => {
      frame = 0;
      spotlight.style.setProperty('--cursor-x', `${x}px`);
      spotlight.style.setProperty('--cursor-y', `${y}px`);
      spotlight.style.setProperty('--cursor-opacity', '1');
    };

    const onMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(updatePosition);
    };

    const onMouseLeave = () => {
      spotlight.style.setProperty('--cursor-opacity', '0');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="cursor-spotlight"
      ref={spotlightRef}
      aria-hidden="true"
    />
  );
}
