'use client';

import { useEffect, useRef } from 'react';

export default function HeroHalo() {
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
        const [threeModule, haloModule] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.halo.min.js'),
        ]);
        if (cancelled || reducedMotion.matches) return;

        effect = haloModule.default({
          el: host,
          THREE: threeModule,
          backgroundColor: 0x000000,
          baseColor: 0xc4a46a,
          color2: 0xf5f2eb,
          amplitudeFactor: 0.62,
          ringFactor: 0.82,
          rotationFactor: 0.62,
          size: 0.92,
          speed: 0.42,
          xOffset: 0.12,
          yOffset: 0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 320,
          minWidth: 320,
          scale: 1,
          scaleMobile: 0.75,
        });
        host.classList.remove('hero-halo-fallback');
      } catch {
        host.classList.add('hero-halo-fallback');
      }
    };

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        effect?.destroy();
        effect = null;
        host.classList.add('hero-halo-fallback');
      } else {
        host.classList.remove('hero-halo-fallback');
        void start();
      }
    };

    if (reducedMotion.matches) host.classList.add('hero-halo-fallback');
    else void start();
    reducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      cancelled = true;
      reducedMotion.removeEventListener('change', handleMotionPreference);
      effect?.destroy();
      host.classList.remove('hero-halo-fallback');
    };
  }, []);

  return <div ref={hostRef} className="hero-media hero-halo" aria-hidden="true" />;
}