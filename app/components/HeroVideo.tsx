'use client';

import { useState, type PointerEvent } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';

const videoUrl = '/videos/hero-bg.mp4';
const posterUrl =
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85';

export default function HeroVideo() {
  const [failed, setFailed] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 55, damping: 24, mass: 0.6 });
  const y = useSpring(pointerY, { stiffness: 55, damping: 24, mass: 0.6 });

  const moveBackground = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -10);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -8);
  };

  const resetBackground = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      className="hero-media"
      aria-hidden="true"
      style={{ x, y, scale: reduceMotion ? 1 : 1.035 }}
      onPointerMove={moveBackground}
      onPointerLeave={resetBackground}
    >
      <div
        className={`hero-poster${failed ? ' is-visible' : ''}`}
        style={{ backgroundImage: `url(${posterUrl})` }}
      />
      {!failed && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl}
          onError={() => setFailed(true)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      <div className="hero-overlay" />
    </motion.div>
  );
}
