'use client';

import { useEffect, useRef } from 'react';

export default function HeroBirds() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let effect: { destroy: () => void } | null = null;
    let cancelled = false;

    const start = async () => {
      if (cancelled || reducedMotion.matches || effect) return;

      try {
        const [threeModule, birdsModule] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.birds.min.js'),
        ]);
        if (cancelled || reducedMotion.matches) return;

        effect = birdsModule.default({
          el: host,
          THREE: threeModule,
          backgroundColor: 0x000000,
          color1: 0x7893ba,
          color2: 0xd5deed,
          colorMode: 'lerpGradient',
          birdSize: 1.2,
          wingSpan: 26,
          speedLimit: 2.5,
          separation: 22,
          alignment: 18,
          cohesion: 14,
          quantity: 4,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 560,
          minWidth: 320,
          scale: 1,
          scaleMobile: 0.65,
        });
        host.classList.remove('hero-birds-fallback');
      } catch {
        host.classList.add('hero-birds-fallback');
      }
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        effect?.destroy();
        effect = null;
        host.classList.add('hero-birds-fallback');
      } else {
        host.classList.remove('hero-birds-fallback');
        void start();
      }
    };

    if (reducedMotion.matches) host.classList.add('hero-birds-fallback');
    else void start();
    reducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      cancelled = true;
      reducedMotion.removeEventListener('change', handleMotionPreference);
      effect?.destroy();
      host.classList.remove('hero-birds-fallback');
    };
  }, []);

  return <div ref={hostRef} className="hero-media hero-birds" aria-hidden="true" />;
}
